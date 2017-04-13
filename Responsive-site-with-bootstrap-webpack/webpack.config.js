module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude:/(node_modules)/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'less-loader'
        ]
      }
    ]
  }
}