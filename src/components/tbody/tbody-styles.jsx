import styleUtils from '../table/style-utilities';

export default theme => {
  const { palette, mixins } = theme;
  return {
    tbody: {
      ...mixins.basicBoxSizing,
      display: 'block',
      ...styleUtils.sizes(),
      ...styleUtils.borders(palette),
      width: '100%',
      overflow: 'auto',
      maxHeight: '70vh',

      '@supports (-webkit-overflow-scrolling: touch)': {
        overflow: 'scroll',
        '-webkit-overflow-scrolling': 'touch',
      },

      [mixins.media('md')]: {
        maxHeight: '100%',
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
