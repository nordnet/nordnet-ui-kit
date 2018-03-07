import styleUtils from './style-utilities';

export default theme => {
  const { palette, mixins, typography } = theme;

  return {
    root: {
      width: '100%',

      '@supports (-webkit-overflow-scrolling: touch)': {
        overflow: 'scroll',
        '-webkit-overflow-scrolling': 'touch',
      },
    },
    table: {
      width: '100%',
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes(),
      textAlign: 'left',
      borderCollapse: 'collapse',
      fontWeight: typography.fontWeightRegular,
      fontFamily: typography.primary.fontFamily,
      borderColor: palette.background.muted,

      minWidth: 'auto',
      [mixins.media('md')]: {
        minWidth: props => props.minWidth,
      },
    },
    tableLayoutFixed: {
      tableLayout: 'fixed',
    },
  };
};
