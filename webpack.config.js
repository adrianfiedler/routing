const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './js/index.js',
    dijkstraDemo: './js/dijkstra-demo.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: ['js']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};