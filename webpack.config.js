const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const config = {
        output: {
            filename: '[name]-[hash].js',
            path: path.join(__dirname, 'dist'),
            publicPath: '/'
        },
        context: path.join(__dirname, 'client'),
        devtool: 'inline-source-map',
        module: {
            rules: [{
                test: /\.js$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader?sourceMap',
                    'postcss-loader'
                ]
            }, {
                test: /(\.jpg$|\.png$)/,
                use: 'file-loader'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader'
            }]
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({template: 'index.html'})
        ]
    };

    if (env !== 'production') {
        config.entry = [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './index.js'
        ];
        config.devServer = {
            hot: true,
            contentBase: path.join(__dirname, 'dist'),
            publicPath: '/',
            historyApiFallback: {index: '/'},
            proxy: {
                "/api": "http://localhost:3000"
            }
        };
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
    } else {
        config.entry = [
            './index.js'
        ];
    }

    return config;
};
