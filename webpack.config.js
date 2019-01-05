const path = require('path');
const HtmlWebpackPlagin = require("html-webpack-plugin");
const MiniCssExtractPlagin = require("mini-css-extract-plugin");
const CleanWebpackPlagin = require("clean-webpack-plugin");

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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, 
                            disable: true, 
                        },
                    },
                ],
            }
        ]
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