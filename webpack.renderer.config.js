const rules = require('./webpack.rules');

rules.push({
  test: /\.s?css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' },
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: require('./webpack.plugins'),
  resolve: require('./webpack.resolve'),
};
