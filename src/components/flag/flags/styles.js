const sizes = {
  xs: {
    width: 16,
    height: 12,
  },
  sm: {
    width: 32,
    height: 24,
  },
  md: {
    width: 64,
    height: 48,
  },
  lg: {
    width: 128,
    height: 96,
  },
};

const rounded = {
  roundedXS: {
    marginLeft: -sizes.xs.width * 0.125,
    position: 'absolute',
  },
  roundedSM: {
    marginLeft: -sizes.sm.width * 0.125,
    position: 'absolute',
  },
  roundedMD: {
    marginLeft: -sizes.md.width * 0.125,
    position: 'absolute',
  },
  roundedLG: {
    marginLeft: -sizes.lg.width * 0.125,
    position: 'absolute',
  },
};

const roundedContainer = {
  roundedContainer: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  roundedContainerXS: {
    width: sizes.xs.width * 0.75,
    height: sizes.xs.width * 0.75,
  },
  roundedContainerSM: {
    width: sizes.sm.width * 0.75,
    height: sizes.sm.width * 0.75,
  },
  roundedContainerMD: {
    width: sizes.md.width * 0.75,
    height: sizes.md.width * 0.75,
  },
  roundedContainerLG: {
    width: sizes.lg.width * 0.75,
    height: sizes.lg.width * 0.75,
  },
};

export default {
  common: {
    display: 'block',
    boxSizing: 'border-box',
    position: 'relative',
    left: 0,
  },
  container: {
    display: 'inline-block',
  },
  ...sizes,
  ...rounded,
  ...roundedContainer,
};
