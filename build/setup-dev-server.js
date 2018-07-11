const path = require('path')
const chokidar = require('chokidar')
const webpack = require('webpack')
const MFS = require('memory-fs')
const fs = require('fs')
const getIpTool = require('./get-Ip-tool.js')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const WebpackBarPlugin = require('webpackbar')
const koaDevMiddleware = require('./koa-dev-middleware.js')
const koaHotMiddleware = require('./koa-hot-middleware.js')
const clientConfig = require('./webpack.client.config.js')
const serverConfig = require('./webpack.server.config.js')

const readFile = (fs, file) => fs.readFileSync(
  path.join(clientConfig.output.path, file),
  'utf-8'
)

const handleErrors = (stats) => {
  const { errors, warnings } = stats.toJson()
    
  if (errors && errors.length) errors.forEach(err => console.error(err))
  if (warnings && warnings.length) warnings.forEach(warn => console.warn(warn))
}

module.exports = setupDevServer

function setupDevServer (app, templatePath, cb) {
  let bundle
  let template
  let clientManifest
  let ready

  const readyPromise = new Promise(resolve => ready = resolve)
  
  const update = () => {
    if (bundle && clientManifest) {
      ready()
      cb(bundle, { template, clientManifest })
    }
  }

  template = fs.readFileSync(templatePath, 'utf-8')

  chokidar.watch(templatePath).on('change', () => {
    template = fs.readFileSync(templatePath, 'utf-8')
    console.log('index.html has been updated.')
    update()
  })

  clientConfig.entry.app = [
    'webpack-hot-middleware/client?noInfo=true',
    clientConfig.entry.app
  ]

  clientConfig.output.filename = '[name].js'
  
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBarPlugin({ color: '#d92b8e' }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`您的项目运行在 http://localhost: ${process.env.PORT}`],
        notes: [`您也可以查看您的 电脑ip + 端口号 (http://${getIpTool()}:${process.env.PORT}) 来访问！`]
      },
      clearConsole: true
    })
  )
  
  const clientCompiler = webpack(clientConfig)
  
  const devMiddleware = koaDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    logLevel: 'silent'
  })
  
  const hotMiddleware = koaHotMiddleware(clientCompiler, {
    heartbeat: 5000,
    log: false
  })
  
  clientCompiler.plugin('done', (stats) => {
    handleErrors(stats)
    
    clientManifest = JSON.parse(readFile(
      devMiddleware.fileSystem,
      'vue-ssr-client-manifest.json'
    ))
    
    update()
  })
  
  app.use(devMiddleware.middleware).use(hotMiddleware)
  
  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  
  serverCompiler.outputFileSystem = mfs

  serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    
    handleErrors(stats)
    
    bundle = JSON.parse(readFile(
      mfs,
      'vue-ssr-server-bundle.json'
    ))
    
    update()
  })
  
  return readyPromise
}
