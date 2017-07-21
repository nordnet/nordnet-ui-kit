import { createStyleSheet } from '@iamstarkov/jss-theme-reactor';

const identifier = `spinner-${Math.round(1000 * Math.random())}`;

export default createStyleSheet('Spinner', theme => ({
  [`@keyframes ${identifier}`]: {
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
    animation: `${identifier} 1s linear infinite`,
  },

  element: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
}));
