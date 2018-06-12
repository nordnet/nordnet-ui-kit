const zIndexTooltip = 2;

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

      '&$below:after, &$above:after': {
        width: '100%',
        height: 8,
        left: 0,
      },

      '&$below:after': {
        bottom: -4,
      },

      '&$above:after': {
        top: -8,
      },

      '&$right:after, &$left:after': {
        height: '100%',
        width: 8,
      },

      '&$left:after': {
        left: -8,
      },
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

      '&$above': {
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

      '&$below': {
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

      '&$left': {
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

      '&$right': {
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
