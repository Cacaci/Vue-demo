const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  // 使用独立构建
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader'
              })
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '/common.css'
    })
  ]
  /*,
  babel: {
    presets: ['es2015'],
    // vue中使用mapActions等辅助函数，需要安装transform-object-rest-spread插件
    plugins: ['transform-runtime', 'transform-object-rest-spread']
  }*/
}
