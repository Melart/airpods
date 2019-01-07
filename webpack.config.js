const path = require('path');
const HtmlWebpackPlagin = require("html-webpack-plugin");
const MiniCssExtractPlagin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlagin.loader, 
                    "css-loader", 
                    "sass-loader" 
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlagin({
            filename: 'main.css'
        })
      ]
    
}