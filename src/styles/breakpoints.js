export const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: 760,
  md: 976,
  lg: 1280,
  xl: 1600,
};

export default function createBreakpoints() {
  return breakpoints;
}
