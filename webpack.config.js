module.exports = {
  devtool: 'sourcemap',

  context: __dirname + '/src',
  entry: './app.es6.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },



  cache: true,
  debug: true,

  module: {
    loaders: [
       { test: /\.es6.js$/, include: [/src/], loader: 'babel' }
    ]
  },

  noParse: [
    '/node_modules/angular'
  ]
};