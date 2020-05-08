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
        }],
      }
    ]
  },

  /*
  * The bundle will be written to the dist/ directory.
  * The public-path setting is used for url-rewriting.
  * For example, in our case, when CSS-Loader encounters
  * a css file with a url(foo.jpg) directive, that directive
  * will cause foo.jpg to be loaded with file-loader, and
  * the url(..) to be replaced with the URL returned by
  * file-loader. The file-loader, in turn, will use the
  * publicPath setting to prefix the URLs.
  */
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  /*
   * contentBase:
   * The file sys. location of non-webpack assets.
   * Essentially the docroot. The index.html is
   * served from here. By default, this directory will
   * be served from server root.
   * 
   * publicPath:
   * By default, WDS will mount the bundles @ server root,
   * change this. Our index.html file expects to find bundle.js
   * at: http://localhost:3000/js/.
   */
  devServer: {
    port: 3000,
    contentBase: [ /*index*/ path.join(__dirname, 'public/'), /*assets*/ path.join(__dirname, 'dist')],
    publicPath: 'https://localhost:3000/js/',
    hotOnly: true,
  },

  resolve: { extensions: ['*', '.js', '.jsx'] },

  plugins: [new webpack.HotModuleReplacementPlugin()]
  
}