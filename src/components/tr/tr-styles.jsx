import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

const normal = theme => {
  const { mixins } = theme;

  return {
    tr: {
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes(),
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent',
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
      '& td': {
        border: 0,
        background: `linear-gradient(to top, ${theme.palette.shades.dark.text.muted} 2px, ${color.white} 2px)`,
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
