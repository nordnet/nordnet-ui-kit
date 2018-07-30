import styleUtils from '../table/style-utilities';

export default theme => {
  const { palette, mixins } = theme;
  return {
    tbody: {
      width: '100%',
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes(),
      ...styleUtils.borders(palette),
      overflow: 'auto',

      '@supports (-webkit-overflow-scrolling: touch)': {
        overflow: 'scroll',
        '-webkit-overflow-scrolling': 'touch',
      },

      '&.alternate-rows': {
        '& tr:nth-child(odd)': {
          background: palette.background.muted,
        },
      },

      '&.scroll': {
        overflowY: 'scroll',
      },
    },
  };
};
