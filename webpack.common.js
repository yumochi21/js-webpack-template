var path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [['@babel/preset-env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use:[
          'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: 'url-loader'
      }
    ]
  }
};