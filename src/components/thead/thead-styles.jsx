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
      borderBottom: `2px solid ${color.grayDarker}`,
      '& th': {
        '@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)': {
          borderBottom: `2px solid ${color.grayDarker}`,
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderBottom: `2px solid ${color.grayDarker}`,
        },
      },
    },
    hiddenOnMobile: {
      [mixins.maxMedia('md')]: {
        display: 'none',
      },
    },
    sticky: {
      border: 0,
      '& th': {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: color.white,
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
