const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'jgame.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {  
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // Path to   your HTML file
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'preload.js',
          to: '.'
        },
        {
          from: 'main.js',
          to: '.'
        },
        {
          from: 'src/images',
          to: 'images'
        },
        { from: '*.css',
          to: '.'          
        }
      ]
    })
  ],
  devServer: {
    static: './dist', // Serve files from the 'dist' directory
    open: true, // Open the server in the default browser
    port: 8080, // Specify a port (optional)
    hot: true, // Enable hot module replacement
  },
};

