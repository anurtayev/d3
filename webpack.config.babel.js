import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: path.join(process.cwd(), 'src', 'app.js'),

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'app.js'
  },

  resolve: {
    extensions: ['.js', '.css']
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src', 'index.pug')
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    stats: 'errors-only'
  }
}
