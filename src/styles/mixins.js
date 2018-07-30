const basicBoxSizing = {
  '&, & *, & *::after, & *::after': {
    boxSizing: 'border-box',
  },
};

// See: http://a11yproject.com/posts/how-to-hide-content/
const screenReadersOnly = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  clipPath: 'inset(50%)',
  border: 0,
};

export default function createMixins(breakpoints = {}) {
  const media = size => {
    const breakpoint = breakpoints[size];

    if (breakpoint) {
      return `@media only screen and (min-width: ${breakpoints[size]}px)`;
    }

    return '&';
  };

  const maxMedia = size => {
    const breakpoint = breakpoints[size];

    if (breakpoint) {
      return `@media only screen and (max-width: ${breakpoints[size] - 1}px)`;
    }

    return '&';
  };

  return {
    basicBoxSizing,
    media,
    maxMedia,
    screenReadersOnly,
  };
}
