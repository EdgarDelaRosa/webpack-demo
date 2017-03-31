var optimize = require('webpack').optimize;


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: 'bundle.js'
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
        new optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            comments: false
        })
    ]

};