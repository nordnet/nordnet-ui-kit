import styleUtils from '../style-utilities';

export default theme => {
  const { palette, mixins, typography } = theme;
  return {
    tbody: {
      width: '100%',
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes({ typography }),
      ...styleUtils.borders(palette),
      overflow: 'auto',

      '@supports (-webkit-overflow-scrolling: touch)': {
        overflow: 'scroll',
        '-webkit-overflow-scrolling': 'touch',
      },

      '&.alternate-rows': {
        '& tr:nth-child(odd)': {
          background: palette.gray7,
        },
      },

      '&.scroll': {
        overflowY: 'scroll',
      },
    },
  };
};
