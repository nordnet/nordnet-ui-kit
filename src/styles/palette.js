import color from './color';

const variant = {
  primary: '#00A9EC',
  info: '#365299',
  success: '#00BD76',
  warning: '#FFBD55',
  danger: '#EF472F',
};

export const light = {
  text: {
    default: color.black,
    muted: color.grayDarker,
  },
  background: {
    default: color.white,
    disabled: color.gray,
  },
};

export const dark = {
  text: {
    default: color.white,
    secondary: color.grayLighter,
  },
  background: {
    default: color.black,
    disabled: color.grayDark,
  },
};

export const shades = { light, dark };

export default function createPalette({
  primary = variant.primary,
  accent = variant.info,
  error = variant.danger,
  type = 'light', // TODO
  name = 'nordnet',
} = {}) {
  return {
    name,
    type,
    color,
    variant,
    text: shades[type].text,
    // action: shades[type].action,
    background: shades[type].background,
    shades,
    primary,
    accent,
    error,
    // // functions
    // getContrastText,
  };
}

export { createPalette };
