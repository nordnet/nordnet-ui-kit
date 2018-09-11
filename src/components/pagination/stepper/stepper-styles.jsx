export default ({ palette, mixins }) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: [0, 10],

    [mixins.media('md')]: {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  button: {
    fontSize: 16,
    '&[disabled]': {
      color: palette.action.disabled,
    },
  },
});
