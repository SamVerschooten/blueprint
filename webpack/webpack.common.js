const webpack = require("webpack");
const path = require('path');
const rules = require('./rules');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function makeWebpackConfig(options) {
    console.log("Webpack options:");
    console.log(options);

    var config = {};

    config.entry = {
        polyfills: './src/setup/polyfills.ts',
        app: "./src/main",
        vendor: './src/setup/vendor.ts'
    };

    config.output = {
        path: "./dist",
        filename: "assets/[name].bundle.js",
        publicPath: '/'
    };

    config.resolve = {
        extensions: ['ts', 'js', '.js', '.ts']
    };

    config.module = {
        rules: rules
    };

    config.plugins = [
        new CopyWebpackPlugin([
            {from: 'src/assets/images', to: 'assets/images/'}
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor', 'app'].reverse()
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency',
            inject: 'body',
            hash: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(options.metaData.ENV),
                'NODE_ENV': JSON.stringify(options.metaData.ENV),
                'API_URL' : JSON.stringify(options.metaData.API_URL)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: options.debug,
            minimize: true
        })
    ];

    return config;
};