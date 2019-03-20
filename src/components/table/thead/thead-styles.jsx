import styleUtils from '../style-utilities';

const normal = ({ mixins, typography, palette }) => ({
  thead: {
    width: '100%',
    ...styleUtils.sizes({ typography }),
    ...mixins.basicBoxSizing,
    fontWeight: typography.primary({ weight: 'bold' }).fontWeight,
    borderBottom: `2px solid ${palette.gray0}`,

    '& th': {
      '@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)': {
        borderBottom: `2px solid ${palette.gray0}`,
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
      fallbacks: {
        position: 'relative',
      },
      top: 0,
      zIndex: 1,
      backgroundColor: palette.white,
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
      borderBottom: `2px solid ${palette.gray0}`,
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
