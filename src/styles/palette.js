import color from './color';

export default function createPalette() {
  return {
    // name,
    // type,
    ...color,
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
