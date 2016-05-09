module.exports = {
  entry: {
      React: './src/App.jsx'
  },
  output: {
    filename: './public/js/main.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};