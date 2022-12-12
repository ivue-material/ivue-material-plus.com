const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  lintOnSave: isProduction ? false : 'default',
  outputDir: 'plus',
  publicPath: 'https://cdn.lovevuerk.com/plus/',
};
