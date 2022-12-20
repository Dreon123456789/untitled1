const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require("webpack");

module.exports = {
        entry: path.join(__dirname, 'src', 'index.js'),
        // print: './src/print.js',
        // hot: 'webpack/hot/dev-server.js',
        // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.[contenthash].js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'template.html'),
                filename: 'index.html',
            }),
            new MiniCssExtractPlugin({
                 filename: '[name].[contenthash].css',
             }),

            // new webpack.HotModuleReplacementPlugin(),


        ],
        devServer: {
            watchFiles: path.join(__dirname, 'src'),
            port: 9000,
            hot: false,
            client: false,

    },
};