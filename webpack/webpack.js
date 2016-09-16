const webpack = require("webpack");
const path = require('path');
const loaders = require('./loaders');

const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
var StringReplacePlugin = require("string-replace-webpack-plugin");

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'release';

module.exports = function makeWebpackConfig() {

    var config = {};

    config.entry = {
        app: "./src/main",
        vendor: [
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic'
        ]
    };

    config.output = {
        path: "./dist",
        filename: "assets/[name].bundle.js",
        publicPath: '/'
    };

    config.resolve = {
        extensions: ['', 'ts', 'js', '.js', '.ts']
    };

    if (isProd) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
    }

    // add debug messages
    config.debug = !isProd;

    config.module = {
        loaders: loaders.concat([
            {
                test: /config.ts$/,
                loader: StringReplacePlugin.replace({
                    replacements: [
                        {
                            pattern: '%API_URL_KEY%',
                            replacement: function () {
                                return isProd? 'https://rebound-api.herokuapp.com/' : 'http://localhost:8081/';
                            }
                        }
                    ]
                })
            }
        ])
    };

    config.plugins = [
        new CopyWebpackPlugin([
            {from: 'node_modules/core-js/client/shim.min.js', to: 'node_modules/core-js/client/shim.min.js'},
            {from: 'node_modules/zone.js/dist/zone.js', to: 'node_modules/zone.js/dist/zone.js'},
            {from: 'node_modules/reflect-metadata/Reflect.js', to: 'node_modules/reflect-metadata/Reflect.js'}
        ]),
        new StringReplacePlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery',
            'foundation': 'foundation'
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"assets/vendor.bundle.js"),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency',
            inject: 'body',
            hash: true
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    ];

    config.devServer = {
        historyApiFallback: true,
        stats: { colors: true }
    };

    return config;
}();