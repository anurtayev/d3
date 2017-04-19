import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

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
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
      },
      {
        reload: false
      }
    )
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    stats: 'errors-only'
  }
}
