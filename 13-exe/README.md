# Convert to Typescript


## Add typescrpt

```bash
$ npm install --save-dev typescript
```

## Create tsconfig.json

```javascript
{
  "compilerOptions": {
    "target": "ES5", // Specify the target JavaScript version
    "module": "commonjs", // Specify the module system
    "outDir": "dist", // Output directory for compiled JavaScript
    "esModuleInterop": true, // Enable interop between CommonJS and ES modules
    "skipLibCheck": true, // Skip type checking for external libraries
    "strict": true // Enable strict type checking
  },
  "include": [
    "./"
  ]
}
```

## Update webpack config

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
          from: 'images',
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

```

## Install tsloader

```bash
$ npm install --save-dev ts-loader
```


## Options

- [Electron](https://www.electronjs.org/docs/latest/)
- [PKG](https://github.com/vercel/pkg#readme)
- [Node](https://nodejs.org/api/single-executable-applications.html)
