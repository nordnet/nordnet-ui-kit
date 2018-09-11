export default ({ mixins }) => ({
  list: {
    display: 'flex',
    padding: 0,
    listStyleType: 'none',
    justifyContent: 'center',
  },
  stepperText: {
    [mixins.maxMedia('md')]: {
      display: 'none',
    },
  },
  stepperIcon: {
    [mixins.media('md')]: {
      display: 'none',
    },
  },
});
