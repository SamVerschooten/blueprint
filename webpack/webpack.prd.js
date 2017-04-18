const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ENV = 'production';
const API_URL= 'http://localhost:3000';
const METADATA = {
    API_URL: API_URL,
    ENV: ENV
};

module.exports = function makeWebpackConfig(options) {
    return webpackMerge(commonConfig({metaData: METADATA, debug: false}), {
        devtool: 'source-map',
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true
            })
        ]
    });
};