export default ({ palette, mixins }) => ({
  firstMobileRow: {},
  row: {
    overflow: 'visible',

    '&:hover': {
      backgroundColor: palette.color.grayLightest,
    },

    '&:hover $firstMobileRow': {
      [mixins.maxMedia('md')]: {
        backgroundColor: palette.color.grayLightest,
      },
    },

    '& .borderless': {
      [mixins.maxMedia('md')]: {
        border: 'none',
      },
    },
  },
  expanded: {
    '&:hover': {
      [mixins.maxMedia('md')]: {
        backgroundColor: 'initial',
      },
    },

    '& $firstMobileRow': {
      [mixins.maxMedia('md')]: {
        backgroundColor: palette.color.grayLightest,
      },
    },

    [mixins.maxMedia('md')]: {
      borderTop: `2px solid ${palette.color.grayDarker}`,
      borderBottom: `2px solid ${palette.color.grayDarker}`,

      '& + $expanded': {
        borderTop: 'none',
      },
    },
  },
  expander: {
    border: 'none',
    backgroundColor: 'transparent',
    height: '100%',
    cursor: 'pointer',
    outline: 'none',
    '&:focus': {
      color: palette.color.blue,
    },
  },
  expanderText: {
    ...mixins.screenReadersOnly,
  },
});
