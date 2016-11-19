var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/js/index.js",
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname + "/js",
        filename: "bundle.js",
        publicPath: "/js/"
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: []
                }
            }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: __dirname,
    }
};