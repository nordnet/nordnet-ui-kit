module.exports = {
  path: '../../icons',
  filter: /\.svg$/,
  pathTransform: (_) => '!svg-icon-template-loader!' + _,
};
