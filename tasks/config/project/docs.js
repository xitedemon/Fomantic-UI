/*******************************
             Docs
*******************************/

/* Custom paths config for serving docs */

module.exports = {
  base: '',
  paths: {
    source: {
      config      : 'src/theme.config',
      definitions : 'src/definitions/',
      site        : 'src/site/',
      themes      : 'src/themes/'
    },
    output: {
      less         :     '../docs/out/src/',
      packaged     : '../docs/out/dist/',
      uncompressed : '../docs/out/dist/components/',
      compressed   : '../docs/out/dist/components/',
      themes       : '../docs/out/dist/themes/'
    },
    clean: '../docs/out/dist/'
  }
};