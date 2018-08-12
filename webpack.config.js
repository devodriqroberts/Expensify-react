const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    }
};

