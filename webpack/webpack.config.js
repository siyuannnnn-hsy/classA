var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//yarn add webpack webpack-cli -D
//yarn add webpack-dev-server -D
//yarn add html-webpack-plugin -D
//yarn add style-loader css-loader -D
//yarn add less less-loader -D
//yarn add react react-dom
//yarn add abel-loader@8.0.0-beta.0 @babel/core @babel/preset-env -D
//yarn add @babel/preset-react -D
module.exports = {
    entry : './src/index.js',
    devServer:{
        port : 3000
    },
    output : {
        filename : 'index.js',
        path : path.resolve(__dirname,'build')
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'react-app',
            template : './public/index.html'
        })
    ],
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use : ['style-loader','css-loader','less-loader']
            },
            {
                test:/\.js$/,
                use : {
                    loader :'babel-loader',
                    options : {
                        presets : ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }

}