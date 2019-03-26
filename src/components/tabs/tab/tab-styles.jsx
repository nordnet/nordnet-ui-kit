const borderHeight = 2;

export default ({ palette, typography, mixins }) => ({
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
    color: palette.gray0,
    paddingBottom: 2,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    outline: 'none',

    'button&': {
      background: 'none',
      border: 0,
    },

    'a&': {
      textDecoration: 'none',
    },

    '&[aria-selected="true"]': {
      color: palette.gray0,
      borderBottom: [2, 'solid', palette.cta],
      marginBottom: -2,
    },

    ...typography.secondary({
      weight: 'bold',
    }),
  },

  primary: {
    flex: '0 0 auto',
  },

  secondary: {
    flex: '1 1 auto',
    textAlign: 'center',
    paddingLeft: 0,
    paddingRight: 0,

    '& $tab': {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },

  tertiary: {
    padding: [0, '5%'],

    '&:first-child': {
      paddingLeft: 0,
      marginLeft: 'auto',
    },

    '&:last-child': {
      paddingRight: 0,
      marginRight: 'auto',
    },

    '& $tab': {
      paddingBottom: 8,

      [mixins.media('md')]: {
        padding: [0, 12, 8, 12],
      },
    },

    '& $tab::before': {
      height: borderHeight,

      [mixins.media('md')]: {
        height: borderHeight,
      },
    },
  },
});
