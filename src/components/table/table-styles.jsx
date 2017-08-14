import styleUtils from './style-utilities';

export default theme => {
  const { palette, mixins, typography } = theme;

  return {
    root: {
      width: '100%',
      overflow: 'auto',
      position: 'relative',

      '@supports (-webkit-overflow-scrolling: touch)': {
        overflow: 'scroll',
        '-webkit-overflow-scrolling': 'touch',
      },
    },
    table: {
      ...mixins.basicBoxSizing,
      display: 'block',
      textAlign: 'left',
      borderCollapse: 'collapse',
      fontWeight: typography.fontWeightRegular,
      fontFamily: typography.primary.fontFamily,
      borderColor: palette.background.muted,
      ...styleUtils.sizes(),
    },
  };
};
