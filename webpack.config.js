var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new ngAnnotatePlugin({
      add: true
      // other ng-annotate options here
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
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

  resolve: {
    modulesDirectories: ['node_modules']
  },

  noParse: [
    '/node_modules/angular',
    '/node_modules/angular-ui-router'
  ]
};
