const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ['css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './app/src/app.html',
            filename: 'app.html',
            hash: true
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: './app/src/css',
        //         to: 'css'
        //     }]
        // })
    ]
};   