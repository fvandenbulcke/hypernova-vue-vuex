/* eslint-disable import/no-extraneous-dependencies */
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const server = {
  target: 'node',
  entry: {
    server: './build/server.js',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};

const client = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty',
  },
  entry: {
    client: './build/client.js',
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};

module.exports = [server, client];
