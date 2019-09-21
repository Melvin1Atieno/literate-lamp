const path = require('path');

module.exports = {
  // debug: true,
  devtool: 'inline-source-map',
  // An entry point indicates which module webpack should use to begin building out its internal dependency graph.
  entry: {
    app: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  // output configuration options tells webpack how to write the compiled files to disk.
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // They serve the purpose of doing anything else that a loader cannot do.
  plugins: [],
  // Loaders are transformations that are applied on the source code of a module. They allow you to pre-process files as you import or “load” them.
  module: {
    rules: [
      {test: /\.js/, loaders: ['babel-loader'], exclude: /node_modules/},
      {test: /\.css/, loaders:['style-loader', 'css-loader']}
    ]
  },
  mode: 'development'
}
