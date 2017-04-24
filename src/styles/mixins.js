const basicBoxSizing = {
  '&, & *, & *::after, & *::after': {
    boxSizing: 'border-box',
  },
};

export default function createMixins(breakpoints = {}) {
  const media = (size) => {
    const breakpoint = breakpoints[size];

    if (breakpoint) {
      return `@media only screen and (min-width: ${breakpoints[size]}px)`;
    }

    return '&';
  };

  return {
    basicBoxSizing,
    media,
  };
}
