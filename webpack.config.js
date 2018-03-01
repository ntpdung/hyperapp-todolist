const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = [
  {
    entry: {
      index: './src/lib/hyper-app/index.js',
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  },
  {
    entry: {
      todoList: './src/drawing.js',
    },
    output: {
      filename: 'source.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [ 'es2015', { modules: false } ]
            ]
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("todo-list.css"),
    ]
  },
  // {
  //   entry: {
  //     index: './src/assets/index.scss',
  //     todolist: './src/assets/todo-list.scss',
  //   },
  //   output: {
  //     filename: '[name].js',
  //     path: path.resolve(__dirname, 'dist/assets')
  //   },
  //   module: {
  //     rules: [
  //       {
  //             test: /\.scss$/,
  //             use: [{
  //                 loader: "style-loader"
  //             }, 
  //             {
  //                 loader: "css-loader", options: {
  //                     sourceMap: true
  //                 }
  //             },
  //             {
  //                 loader: "sass-loader", options: {
  //                     sourceMap: true
  //                 }
  //             }]
  //         }
  //     ]
  //   },
  // },
];