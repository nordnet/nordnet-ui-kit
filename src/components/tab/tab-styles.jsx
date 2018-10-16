const borderHeight = 2;

export default theme => {
  const { palette, typography, mixins } = theme;

  return {
    root: {
      padding: [0, 10],

      '&:first-child': {
        paddingLeft: 0,
      },

      '&:last-child': {
        paddingRight: 0,
      },
    },

    tab: {
      position: 'relative',
      display: 'block',
      fontSize: '12px',
      background: 'none',
      border: 0,
      color: palette.text.muted,
      fontFamily: typography.primary.fontFamily,
      fontWeight: typography.fontWeightSemiBold,
      paddingTop: 5,
      paddingBottom: borderHeight + 2,
      textTransform: 'uppercase',
      textDecoration: 'none',
      letterSpacing: 0.5,
      whiteSpace: 'nowrap',
      cursor: 'pointer',

      '&::before': {
        content: '""',
        display: 'none',
        width: '100%',
        height: borderHeight,
        background: palette.text.default,
        position: 'absolute',
        bottom: 0,
        left: 0,
      },

      '&[aria-selected="true"], &:focus': {
        color: palette.text.default,

        '&::before': {
          display: 'block',
        },
      },
    },

    primary: {
      flex: '0 0 auto',
    },

    secondary: {
      flex: '1 1 auto',
      textAlign: 'center',
    },

    tertiary: {
      padding: [0, '5%'],

      '&:first-child': {
        paddingLeft: 0,
      },

      '&:last-child': {
        paddingRight: 0,
      },

      '& $tab': {
        paddingBottom: borderHeight * 1.5 + 8,

        [mixins.media('md')]: {
          padding: [0, 12, borderHeight * 2 + 12, 12],
        },
      },

      '& $tab::before': {
        height: borderHeight * 1.5,

        [mixins.media('md')]: {
          height: borderHeight * 2,
        },
      },
    },
  };
};
