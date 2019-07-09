module.exports = {
    chainWebpack: config => {
      // GraphQL Loader
      config.module
        .rule('pdf')
        .test(/\.pdf$/)
        .use('url-loader')
          .loader('url-loader')
          .end()
    }
  }