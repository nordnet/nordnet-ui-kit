const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: 720,
  md: 936,
  lg: 1252,
  xl: 1600,
};

export default function createBreakpoints() {
  return breakpoints;
}
