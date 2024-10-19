// webpack.config.js
module.exports = {
    // Your existing Webpack config
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules\/jspdf/, // Exclude jsPDF from source map loader
        },
      ],
    },
  };
  