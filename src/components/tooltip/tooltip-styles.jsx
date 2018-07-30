import { wrapInMobileMediaQuery, wrapInDesktopMediaQuery } from './wrapStylesInMediaQueries';

const zIndexTooltip = 2;

// This is a somewhat messy workaround to enable different specified placements for mobile and desktop
// the only reason this is needed in the first place is because the smart placement is broken,
// so often horizontal placements cause horizontal scroll on mobile.
// Should the smart placement be fixed, this should be removed.
const containerPlacementStyles = (txt = '') => ({
  [`&$below${txt}:after, &$above${txt}:after`]: {
    width: '100%',
    height: 8,
    left: 0,
  },

  [`&$below${txt}:after`]: {
    bottom: -4,
  },

  [`&$above${txt}:after`]: {
    top: -8,
  },

  [`&$right${txt}:after, &$left${txt}:after`]: {
    height: '100%',
    width: 8,
  },

  [`&$left${txt}:after`]: {
    left: -8,
  },
});

const popupPlacementStyles = (palette, txt = '') => ({
  [`&$above${txt}`]: {
    left: '50%',
    bottom: '100%',
    transform: 'translateX(-50%)',
    marginBottom: 8,
    '&:before': {
      bottom: -8,
      borderTop: `8px solid ${palette.text.default}`,
      borderRight: '8px solid transparent',
      borderLeft: '8px solid transparent',
    },
  },

  [`&$below${txt}`]: {
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: 8,
    '&:before': {
      top: -8,
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderBottom: `8px solid ${palette.text.default}`,
    },
  },

  [`&$left${txt}`]: {
    right: 8,
    top: '50%',
    marginRight: '100%',
    transform: 'translate(0, -50%)',
    '&:before': {
      left: 'inherit',
      right: -8,
      marginTop: -6,
      top: '50%',
      content: '""',
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderLeft: `6px solid ${palette.text.default}`,
    },
  },

  [`&$right${txt}`]: {
    left: 8,
    top: '50%',
    marginLeft: '100%',
    transform: 'translate(0, -50%)',
    '&:before': {
      right: 'inherit',
      left: -2,
      marginTop: -6,
      top: '50%',
      content: '""',
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderRight: `6px solid ${palette.text.default}`,
    },
  },
});

export default theme => {
  const { palette, transitions, mixins, typography } = theme;

  return {
    tooltip: {
      ...mixins.basicBoxSizing,
      color: palette.color.grayDarker,
      position: 'relative',
      display: 'inline-block',
    },

    above: {},
    below: {},
    left: {},
    right: {},
    aboveMobile: {},
    belowMobile: {},
    leftMobile: {},
    rightMobile: {},
    aboveDesktop: {},
    belowDesktop: {},
    leftDesktop: {},
    rightDesktop: {},

    container: {
      cursor: 'pointer',
      display: 'flex',

      ' .icon': {
        verticalAlign: 'text-bottom',
      },

      '&:after': {
        position: 'absolute',
        content: '""',
      },

      ...containerPlacementStyles(),
      ...wrapInMobileMediaQuery(mixins, containerPlacementStyles('Mobile')),
      ...wrapInDesktopMediaQuery(mixins, containerPlacementStyles('Desktop')),
    },

    popup: {
      transition: transitions.create(['opacity']),
      position: 'absolute',
      zIndex: zIndexTooltip,
      whiteSpace: 'nowrap',
      '&:before': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'block',
        content: '""',
        width: 0,
        height: 0,
        zIndex: zIndexTooltip,
      },

      ...popupPlacementStyles(palette),
      // the wrapping is needed because of https://github.com/cssinjs/jss/issues/446
      // can't have & and $ as selectors inside the mixin
      ...wrapInMobileMediaQuery(mixins, popupPlacementStyles(palette, 'Mobile')),
      ...wrapInDesktopMediaQuery(mixins, popupPlacementStyles(palette, 'Desktop')),
    },
    popupFixed: {
      whiteSpace: 'inherit',
    },

    popupContent: {
      width: '100%',
      textAlign: 'left',
      fontSize: 12,
      padding: '4px 16px',
      color: palette.background.default,
      background: palette.text.default,
      fontFamily: typography.primary.default,
      borderRadius: 4,
      overflowWrap: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
    },
    popupContentVertical: {
      position: 'absolute',
    },
    [mixins.maxMedia('md')]: {
      popupContentVerticalMobile: {
        position: 'absolute',
      },
    },
    [mixins.media('md')]: {
      popupContentVerticalDesktop: {
        position: 'absolute',
      },
    },
    popupContentAbove: {
      bottom: 0,
    },
    [mixins.maxMedia('md')]: {
      popupContentAboveMobile: {
        bottom: 0,
      },
    },
    [mixins.media('md')]: {
      popupContentAboveDesktop: {
        bottom: 0,
      },
    },
    popupContentFixed: {
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
      wordWrap: 'break-word',
    },
    popupDesktopOnly: {
      [mixins.maxMedia('md')]: {
        display: 'none',
      },
    },
  };
};
