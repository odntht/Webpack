const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    plugins: [new HtmlWebPackPlugin({
        template: './app/src/app.html',
        filename: 'app.html',
        hash: true
    })]
};   