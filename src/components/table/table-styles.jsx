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
      minWidth: props => props.minWidth,
      [mixins.maxMedia('md')]: {
        // ToDo: put dynamic style back inside mq when react-jss fixes bug with dynamic styles in media queries https://github.com/cssinjs/jss/issues/1188
        // !important because dynamic style still takes precedence as it is below the static styles in the DOM
        minWidth: 'auto !important',
      },
    },
    tableLayoutFixed: {
      tableLayout: 'fixed',
    },
  };
};
