export const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
  },
  background: {
    default: '#ccc',
    status: '#cc0',
  },
};

export const dark = {
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.54)',
  },
  action: {
    active: 'rgba(255, 255, 255, 0.54)',
    disabled: 'rgba(255, 255, 255, 0.26)',
  },
  background: {
    default: '#000',
    status: '#cc0',
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
    text: shades[type].text,
    action: shades[type].action,
    background: shades[type].background,
    shades,
    primary,
    accent,
    error,
    // grey,
    // // functions
    // getContrastText,
  };
}

export { createPalette };
