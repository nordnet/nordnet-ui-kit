export default function createMixins(breakpoints) {
  // TODO use breakpoints

  const basicBoxSizing = {
    '&, & *, & *::after, & *::after': {
      boxSizing: 'border-box',
    },
  };

  const media = (size = 'xs') => `@media only screen and (min-width: ${breakpoints[size]})`;

  return {
    basicBoxSizing,
    media,
  };
}
