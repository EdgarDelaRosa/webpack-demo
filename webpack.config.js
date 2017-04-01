var optimize = require('webpack').optimize;
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: ['jquery']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|svg)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 45000,
            },
          },
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    /*new optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      },
      comments: false
    })*/

    new optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new Visualizer()

  ]

};
