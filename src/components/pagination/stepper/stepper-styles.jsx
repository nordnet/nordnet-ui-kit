export default ({ palette, mixins }) => ({
  button: {
    fontSize: 16,
    margin: [0, 10],
    display: 'flex',
    alignItems: 'center',

    '&[disabled]': {
      color: palette.action.disabled,
    },

    [mixins.media('md')]: {
      marginLeft: 20,
      marginRight: 20,
    },
  },
});
