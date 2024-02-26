const path = require('path');

 module.exports = {
   entry: {
    main: '/src/index.js',
   },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
          test: /\.svg$/,
          use: 'file-loader',
      }
    ],
  },
 };