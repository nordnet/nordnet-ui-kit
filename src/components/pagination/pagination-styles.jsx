export default ({ mixins }) => ({
  root: {
    margin: [40, 0],
    display: 'flex',
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
