var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/js/index.js",
    // devtool: 'sourcemaps',
    // cache: true,
    // debug: true,
    output: {
        path: __dirname + "/public/js",
        filename: "bundle.js",
        publicPath: "/js/"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(/*{ minimize: true }*/)
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    },
    devServer: {
        port: 9000,
        host: '127.0.0.3',
        contentBase: __dirname,
    }
};