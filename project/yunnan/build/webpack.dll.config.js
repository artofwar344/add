var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var AssetsPlugin = require('assets-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    libs: [
      'jquery',
      'hui',
      'mint-ui',
      'echarts',
      'vue',
      'vue-router',
      'vuex',
      // 'mint-ui/lib/style.css',
      // 'hui/dist/css/hui.min.css',
      'qrcodejs2',
      'html2canvas',
      'axios',
    ]
  },
  output: {
    path: path.resolve(__dirname, '../static/utils'),
    filename: '[name].[chunkhash:7].js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(
      ['static/utils/*.js','static/utils/*.css','static/utils/*.json'],
      {root: path.join(__dirname,'../'),
      verbose: true,
      dry: false
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../public/[name]-mainfest.json'),
      name: '[name]_library',
      context: __dirname // 执行的上下文环境，对之后DllReferencePlugin有用
    }),
    new ExtractTextPlugin('[name].[contenthash:7].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './static/utils'
    }),


  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
}
