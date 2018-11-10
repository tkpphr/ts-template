const webpack = require('webpack');

module.exports = {
  entry: {
    main:'./src/ts/main/index.ts'
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname+'/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './dist',
    port: 3535,
    
  },
  module: {
    rules:[
      {
        test: /\.tsx?$/,
        use: [
          {  
            loader: 'ts-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options:{
              modules:true,
              namedExport:true,
              camelCase:true,
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options:{
              modules:true,
              namedExport:true,
              camelCase:true,
              sass:true,
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.bmp$/i,
        use: [
          {
            loader: 'url-loader',
            options: {}  
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([
      /css\.d\.ts$/
    ]),
  ]
}