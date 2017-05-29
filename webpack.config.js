var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'), 
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "./public"),
        port: 9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}