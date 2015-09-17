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
      test: /\.es6.js$/,
      loader: 'babel',
      include: [/src/],  }
    ]
  },

  noParse: [
    '/node_modules/angular'
  ]
};