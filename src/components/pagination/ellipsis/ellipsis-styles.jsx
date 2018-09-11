export default ({ mixins }) => ({
  item: {
    margin: [0, 5],
    display: 'flex',
    alignItems: 'center',
    [mixins.media('md')]: {
      marginRight: 10,
      marginLeft: 10,
    },
  },
  hiddenOnDesktop: {
    [mixins.media('md')]: {
      display: 'none',
    },
  },
});
