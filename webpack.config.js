const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/i,  // Include .otf extension here
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]', // Output path for fonts
        },
      },
    ],
  },
  mode: 'development', 
};
