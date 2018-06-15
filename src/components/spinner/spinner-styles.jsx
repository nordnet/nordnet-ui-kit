const identifier = `spinner-${Math.round(1000 * Math.random())}`;

export default theme => ({
  [`@keyframes ${identifier}`]: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },

  [`@keyframes bounce-${identifier}`]: {
    'from, 20%, 53%, 80%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      transform: 'translate3d(0, 0, 0)',
    },
    '40%, 43%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -10px, 0)',
    },
    '70%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      transform: 'translate3d(0, -5px, 0)',
    },
    '90%': {
      transform: 'translate3d(0, -2px, 0)',
    },
  },

  spinner: {
    ...theme.mixins.basicBoxSizing,
    display: 'inline-block',
    animation: `${identifier} 1s linear infinite`,
  },

  ball: {
    animationName: `bounce-${identifier}`,
    transformOrigin: 'center bottom',
    animation: `bounce-${identifier} 1.5s linear infinite`,
    textAlign: 'center',
  },
});
