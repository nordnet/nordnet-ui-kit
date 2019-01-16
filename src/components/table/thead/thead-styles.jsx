import styleUtils from '../style-utilities';

const normal = ({ mixins, typography, palette: { color } }) => ({
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
  stickyBorder: {
    border: 0,
    '& th:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      borderBottom: `2px solid ${color.grayDarker}`,
      '@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)': {
        borderBottom: 0,
      },
    },
  },
});

const stickyOffset = theme => ({
  ...normal(theme),
  stickyOffset: {
    '& th': {
      top: props => props.stickyOffset,
    },
  },
});

export { normal as default, stickyOffset };
