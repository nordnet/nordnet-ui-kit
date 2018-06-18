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
    '0%': { transform: 'translateY(0px)' },
    '17%': { transform: 'translateY(-12px)' },
    '33%': { transform: 'translateY(-18px)' },
    '50%': { transform: 'translateY(-20px)' },
    '67%': { transform: 'translateY(-18px)' },
    '83%': { transform: 'translateY(-12px)' },
    '100%': { transform: 'translateY(0px)' },
  },

  spinner: {
    ...theme.mixins.basicBoxSizing,
    display: 'inline-block',
    animation: `bounce-${identifier} 0.85s linear infinite`,
  },

  ball: {
    animation: `${identifier} 1.6s linear infinite`,
    '& > span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
