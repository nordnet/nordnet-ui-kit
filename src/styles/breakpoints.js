const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: 768,
  md: 992,
  lg: 1300,
};

export default function createBreakpoints() {
  return breakpoints;
}
