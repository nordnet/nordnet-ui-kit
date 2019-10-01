export const breakpoints = {
  // The grid is mobile first so xs is the default, hence no breakpoint
  xs: false,
  sm: 736,
  md: 952,
  lg: 1268,
  xl: 1576,
};

export default function createBreakpoints() {
  return breakpoints;
}
