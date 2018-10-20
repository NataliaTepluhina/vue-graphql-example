module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: true,
      integratedEngine: false,
    },
  },
  chainWebpack: config => {
    config.resolve.extensions.prepend('.mjs');

    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  },
};
