export default ({ palette, mixins, typography }) => ({
  button: {
    margin: [0, 10],
    display: 'flex',
    alignItems: 'center',

    '&[disabled]': {
      color: palette.gray4,
    },

    [mixins.media('md')]: {
      marginLeft: 20,
      marginRight: 20,
    },

    ...typography.primary(),
  },
});
