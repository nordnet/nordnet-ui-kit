import styleUtils from '../style-utilities';
import color from '../../../styles/color';

const normal = theme => {
  const { mixins, typography } = theme;

  return {
    tr: {
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes({ typography }),
      borderCollapse: 'collapse',
      flexWrap: 'wrap',
      overflow: 'hidden',

      [mixins.maxMedia('md')]: {
        display: 'flex',
        flexFlow: 'row wrap',
      },
    },
    border: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: color.grayLight,
    },
    sticky: {
      '& td': {
        position: 'sticky',
        top: 0,
        backgroundColor: color.white,
      },
    },
    stickyBorder: {
      border: 0,
      '& td:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        borderBottom: `2px solid ${color.grayDarker}`,
      },
    },
  };
};

const stickyOffset = theme => ({
  ...normal(theme),
  stickyOffset: {
    '& td': {
      top: props => props.stickyOffset,
    },
  },
});

export { normal as default, stickyOffset };
