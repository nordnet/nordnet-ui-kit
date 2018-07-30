import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

const normal = theme => {
  const { palette, mixins, typography } = theme;

  return {
    thead: {
      width: '100%',
      ...styleUtils.sizes(),
      ...mixins.basicBoxSizing,
      fontWeight: typography.fontWeightSemiBold,
      borderColor: color.gray,
      borderBottom: `2px solid ${palette.shades.dark.text.muted}`,
    },
    hiddenOnMobile: {
      [mixins.maxMedia('md')]: {
        display: 'none',
      },
    },
    sticky: {
      '& th': {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: color.white,
      },
    },
    stickyBorder: {
      border: 0,
      '& th': {
        background: `linear-gradient(to top, ${palette.shades.dark.text.muted} 2px, ${color.white} 2px)`,
      },
    },
  };
};

const stickyOffset = theme => ({
  ...normal(theme),
  stickyOffset: {
    '& th': {
      top: props => props.stickyOffset,
    },
  },
});

export { normal as default, stickyOffset };
