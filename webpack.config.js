const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'KEY': JSON.stringify(process.env.KEY)
        }
    }),
  ]
};
