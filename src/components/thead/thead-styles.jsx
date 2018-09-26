import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

const normal = theme => {
  const { mixins, typography } = theme;

  return {
    thead: {
      width: '100%',
      ...styleUtils.sizes(),
      ...mixins.basicBoxSizing,
      fontWeight: typography.fontWeightSemiBold,
    },
    borderBottom: {},
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
        '&:after': {
          display: 'inline-block',
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderBottom: `2px solid ${color.grayDarker}`,
        },
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
