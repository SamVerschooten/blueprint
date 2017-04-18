const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ENV = 'development';
const API_URL= 'http://localhost:8080';
const METADATA = {
    API_URL: API_URL,
    ENV: ENV
};

module.exports = function makeWebpackConfig(options) {
    return webpackMerge(commonConfig({metaData: METADATA, debug: true}), {
        devtool: 'eval-source-map',
        devServer : {
            historyApiFallback: true,
            stats: {colors: true}
        }
    });
};