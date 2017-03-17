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
        use: ['vue-loader']
      }
    ]
  }/*,
  babel: {
    presets: ['es2015'],
    // vue中使用mapActions等辅助函数，需要安装transform-object-rest-spread插件
    plugins: ['transform-runtime', 'transform-object-rest-spread']
  }*/
}
