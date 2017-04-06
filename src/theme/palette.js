import color from './color';

const variant = {
  primary: color.blue,
  info: color.blueDark,
  success: color.green,
  warning: color.yellow,
  danger: color.red,
};

export const light = {
  text: {
    default: color.black,
    muted: color.grayDark,
  },
  action: { // TODO define
    active: color.blue,
    disabled: color.gray,
  },
  background: {
    default: color.white,
    muted: color.grayLightest,
  },
};

export const dark = {
  text: {
    default: color.white,
    muted: color.grayLighter, // For now
  },
  action: { // TODO define
    active: color.blue,
    disabled: color.gray,
  },
  background: {
    default: color.blueDark,
    muted: color.grayDark, // For now
  },
};

export const shades = { light, dark };

function createPalette({
  primary = variant.primary,
  accent = variant.info,
  error = variant.danger,
  type = 'light',
  name = 'nordnet',
} = {}) {
  return {
    name,
    type,
    color,
    variant,
    text: shades[type].text,
    action: shades[type].action,
    background: shades[type].background,
    shades,
    primary,
    accent,
    error,
    // // functions
    // getContrastText,
  };
}

const palette = createPalette();

export default palette;
