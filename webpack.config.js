const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',
    entry: ['react-dev-utils/webpackHotDevClient', './src/index.js'],
    devServer: {
        port: 8000,
        contentBase: __dirname,
        publicPath: '/build/',
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|png|gif)$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
};

module.exports = config;
