const path = require('path');

module.exports = [
  {
    entry: {
      index: './src/hyper-app/index.js',
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
              use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader", options: {
                      sourceMap: true
                  }
              }, {
                  loader: "sass-loader", options: {
                      sourceMap: true
                  }
              }]
          }
      ]
    },
  }
];