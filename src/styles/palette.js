const color = {
  white: '#FFF',
  black: '#222',
  gray: '#C8C8C8',
  grayDark: '#969696',
  grayDarker: '#646464',
  grayLight: '#DEDEDE',
};

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
  primary = 'rgba(75, 0, 130, 1)',
  accent = 'rgba(255, 192, 203, 1)',
  error = 'rgba(255, 0, 0, 1)',
  type = 'light',
} = {}) {
  return {
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
