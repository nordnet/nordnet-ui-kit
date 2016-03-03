module.exports = {
  path: '../../icons',
  filter: /\.svg$/,
  pathTransform: (path) => `!svg-icon-template-loader!${ path }`,
};
