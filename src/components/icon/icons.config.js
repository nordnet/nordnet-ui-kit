module.exports = {
  path: '../../icons',
  filter: /\.svg$/,
  pathTransform: (file) => '!!svg-icon-template-loader!' + file,
};
