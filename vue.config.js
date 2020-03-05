module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '.' : '/',
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://106.14.200.71:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    // 样式相关配置
    extract: false, // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    requireModuleExtension: true, // 去掉文件名中的 .module
    sourceMap: false,
    loaderOptions: {
      stylus: {
        import: ['~@/common/stylus/mixins.styl']
      }
    }
  }
}
