const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const baseConfig = require('./webpack.base.config.js')
const { join } = require('path')
const nodeExternals = require('webpack-node-externals')

const config = merge(baseConfig, {
  entry: {
    app: join(__dirname, '../client/entry-server.js')
  },
  devtool: '#source-map',
  target: 'node',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})

module.exports = config