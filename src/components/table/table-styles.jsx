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
      ...styleUtils.sizes({ typography }),
      textAlign: 'left',
      borderCollapse: 'collapse',
      borderColor: palette.gray7,
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
