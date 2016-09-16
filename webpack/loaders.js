const path = require('path');

module.exports = [
    {
        test: /\.ts/,
        loaders: ['ts-loader'],
        exclude: ['/node_modules/', '/src/server']
    },
    {
        test: /\.html$/,
        loader: 'raw',
        exclude: 'index.html'
    },
    {
        test: /\.scss$/,
        loader: 'raw-loader!sass-loader',
    }
];
