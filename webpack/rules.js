const path = require('path');

module.exports = [
    {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: ['/node_modules/', '/src/server']
    },
    {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: 'index.html'
    },
    {
        test: /\.scss$/,
        use: [
            'raw-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192'
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
    }
];