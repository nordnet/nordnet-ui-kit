export default theme => ({
  [`@keyframes spinThatSpinner`]: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },

  spinner: {
    ...theme.mixins.basicBoxSizing,
    display: 'inline-block',
    animation: `$spinThatSpinner 1s linear infinite`,
  },

  element: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
});
