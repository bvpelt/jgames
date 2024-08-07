# Setup webpack

See 
- https://webpack.js.org/guides/getting-started/
- https://webpack.js.org/concepts/

## Initialize npm package

```bash
$ npm init -y
```

## Add webpack dependencies

```bash
$ npm install webpack webpack-cli webpack-dev-server html-webpack-plugin copy-webpack-plugin --save-dev
```

## Create webpack.config.js 

Create webpack.config.js file with content

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {  
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },    
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html' // Path to   your HTML file
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'images',
          to: 'images'
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
```

## Update package.json with scripts

line with "build": "webpack" is added

```javascript
{
  "name": "12-packaging",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "copy-webpack-plugin": "^12.0.2",
    "html-webpack-plugin": "^5.6.0",
    "webpack": "^5.93.0",
    "webpack-cli": "^5.1.4"
  }
}
```

## Build package

```bash
$ npm run build
```