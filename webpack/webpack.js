const webpack = require("webpack");
const path = require('path');
const rules = require('./rules');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'release';

module.exports = function makeWebpackConfig() {

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

    if (isProd) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
    }

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
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency',
            inject: 'body',
            hash: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(isProd ? "PRD" : "DEV")
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: !isProd,
            minimize: true
        })
    ];

    config.devServer = {
        historyApiFallback: true,
        stats: {colors: true}
    };

    return config;
}();