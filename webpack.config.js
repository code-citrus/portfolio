const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  
  module: {
    rules: [
      
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          }
        }],
      }
    ]
  },

  /*
  * The bundle will be written to the dist/ directory.
  */
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
  },

  /*
   * contentBase:
   * The file sys. location of non-webpack assets.
   * Essentially the docroot. The index.html is
   * served from here.
   * 
   * publicPath:
   * By default, WDS will mount the bundles @ server root,
   * change this. Our index.html file expects to find bundle.js
   * at: http://localhost:3000/js/.
   */
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'public/'),
    publicPath: 'https://localhost:3000/js/',
    hotOnly: true,
  },

  resolve: { extensions: ['*', '.js', '.jsx'] },

  plugins: [new webpack.HotModuleReplacementPlugin()]
  
}