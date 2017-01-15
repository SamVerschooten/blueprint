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
        loader: 'raw-loader!sass-loader'
    },
    {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
    }
];
