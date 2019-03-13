import color, { lightScheme, darkScheme } from './color';

export const light = {
  text: {
    default: color.black,
    secondary: color.grayDarker,
    muted: color.grayDark,
  },
  action: {
    // TODO define
    active: color.blue,
    disabled: color.gray,
  },
  background: {
    default: color.white,
    secondary: color.grayLight,
    muted: color.grayLightest,
  },
};

export const dark = {
  text: {
    default: color.white,
    muted: color.grayLighter, // For now
  },
  action: {
    // TODO define
    active: color.blue,
    disabled: color.gray,
  },
  background: {
    default: color.blueDark,
    muted: color.grayDark, // For now
  },
};

export const shades = { light, dark };

export default function createPalette({ type = 'light' } = {}) {
  return {
    ...(type === 'dark' ? darkScheme : lightScheme),
    // name,
    // type,
    // color,
    // variant,
    // text: shades[type].text,
    // action: shades[type].action,
    // background: shades[type].background,
    // shades,
    // primary,
    // accent,
    // error,
    // // functions
    // getContrastText,
  };
}

export { createPalette };
