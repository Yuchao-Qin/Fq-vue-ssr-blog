const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const baseConfig = require('./webpack.base.config.js')
const { join } = require('path')

const config = merge(baseConfig, {
  entry: {
    app: join(__dirname, '../client/entry-client.js')
  },
  devtool: process.env.NODE_ENV === 'production' ? false : '#cheap-module-source-map',
  target: 'web',
  output: {
    filename: '[name]-[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  plugins: [
    new VueSSRClientPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.VUE_ENV': '"client"'
    }),
    new webpack.NamedChunksPlugin()
  ]
})

module.exports = config