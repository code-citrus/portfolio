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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          }
        ],
      }
    ]
  },

  /*
  * The bundle will be written to the dist/ directory.
  * The publicPath specifies the baes path for all *assets*
  * in the app, used when writing urls.
  */
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
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
   * at: http://localhost:3000/dist/.
   */
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'https://localhost:3000/dist/',
    hotOnly: true,
  },

  resolve: { extensions: ['*', '.js', '.jsx'] },

  plugins: [new webpack.HotModuleReplacementPlugin()]
  
}