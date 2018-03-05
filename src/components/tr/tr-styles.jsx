import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default theme => {
  const { mixins, palette } = theme;

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
        top: props => props.stickyOffset || 0,
        backgroundColor: color.white,
      },
    },
    stickyBorder: {
      '& td': {
        border: 0,
        background: `linear-gradient(to top, ${palette.shades.dark.text.muted} 2px, ${color.white} 2px)`,
      },
    },
  };
};
