const webpack = require('webpack')
const { join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebpackProgressOraPlugin = require('webpack-progress-ora-plugin')
const staticLoader = require('./static-loader.js')

const config = {
  mode: process.env.NODE_ENV,
  output: {
    path: join(__dirname, '../dist'),
    publicPath: '/dist/'
  },
  performance: {
    // maxEntrypointSize: 30000, 
    hints: false
  },
  resolve: {
    alias: {
      vue: join(__dirname, '../node_modules/vue/dist/vue.runtime.esm.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      ...staticLoader(MiniCssExtractPlugin)
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new WebpackProgressOraPlugin({ clear: true })
  )
}

module.exports = config