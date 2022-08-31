const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  /* devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    open: false, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: '',
        ws: false,
        changeOrigin: true

      },

    }

  }, */
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');
    config.resolve.symlinks(true);
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 192
      });
  },

})
