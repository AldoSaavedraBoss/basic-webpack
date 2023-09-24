const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackDevServer = require('webpack-dev-server')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const devMode = process.env.NODE_ENV !== "production";
const devMode = false

module.exports = {
  entry: {
    vanilla: './src/index.js',
    react: './src/index_react.js',
    ts: './src/index_ts.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name][chunkhash].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(?:cjs|js|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: './',
          //   },
          // },
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(gif|jpe?g|svg|png|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(woff|ttf)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['vanilla'],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'react.html',
      chunks: ['react'],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'typescript.html',
      chunks: ['ts'],
      hash: true,
    }),
    new MiniCssExtractPlugin({}),
    new CleanWebpackPlugin(),
  ],
}
