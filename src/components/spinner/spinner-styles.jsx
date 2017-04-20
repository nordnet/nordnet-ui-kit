import { createStyleSheet } from 'jss-theme-reactor';

const identifier = `spinner-${Math.round(1000 * Math.random())}`;

export default createStyleSheet('Spinner', () => ({

  [`@keyframes ${identifier}`]: {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },

  spinner: {
    display: 'inline-block',
    animation: `${identifier} 1s linear infinite`,
  },

  element: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
}));
