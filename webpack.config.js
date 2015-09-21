var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  context: __dirname + '/src',

  entry: {
    app: './app.es6.js',
    vendors: ['angular', 'angular-ui-router']
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
  ],

  cache: true,
  debug: true,

  eslint: {
    configFile: __dirname + '/.eslintrc'
  },

  module: {
    preLoaders: [
      {
        test: /\.es6.js$/,
        loader: 'eslint-loader',
        include: [/src/],
        exclude: [/node_modules/]
      }
    ],
    loaders: [
      {
        test: /\.es6.js$/,
        loader: 'babel',
        include: [/src/],
        exclude: [/node_modules/]
      }
    ]
  },

  noParse: [
    '/node_modules/angular',
    '/node_modules/angular-ui-router'
  ]
};
