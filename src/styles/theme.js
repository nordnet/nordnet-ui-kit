// import shadows from './shadows';
import transitions from './transitions';
import createTypography from './typography';
import createBreakpoints from './breakpoints';
import { createPalette } from './palette';
// import zIndex from './zIndex';
import createMixins from './mixins';
// import spacing from './spacing';

export function createTheme(config = {}) {
  const {
    palette = createPalette({ type: 'dark', a11yColors: config.a11yColors }),
    breakpoints = createBreakpoints(),
    mixins = createMixins(breakpoints),
    typography = createTypography(),
    // ...more
  } = config;

  const theme = {
    palette,
    typography,
    mixins,
    breakpoints /* shadows, spacing, zIndex */,
    transitions,
    // ...more,
  };

  return theme;
}

export default createTheme;
