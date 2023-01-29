const { defineConfig } = require('@vue/cli-service')

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      'api': {
        target: 'http://gmall-h5-api.atguigu.cn/',
        // pathRewrite: { '^/api': "" }
      }
    }
  }
}
