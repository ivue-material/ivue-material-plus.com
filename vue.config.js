const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  lintOnSave: isProduction ? false : 'default',
};
