import { createStyleSheet } from 'jss-theme-reactor';
import c from 'color';
import variables from '../../utilities/variables';

// This function was created because 'focused' versions on colors were not found in the palette
const focusColor = color => (c(color).darken(0.1).hex());

const buttonModifierFn = (variant, color, colorFocus) => {
  const variantDict = {
    primary: {
      background: color,
      borderColor: color,

      '&:hover': {
        background: colorFocus,
        borderColor: colorFocus,
      },
    },

    secondary: {
      color,
      borderColor: color,

      '&:hover': {
        color: colorFocus,
        borderColor: colorFocus,
      },
    },

    link: {
      color,

      '&:hover': {
        color: colorFocus,
      },
    },
  };

  return {
    outlineColor: color,
    ...variantDict[variant],
  };
};

export default createStyleSheet('Button', (theme) => {
  const { palette } = theme;

  return {
    button: {
      display: 'inline-block',
      border: 0,
      fontFamily: 'inherit',
      fontWeight: 700,
      lineHeight: 1,
      transition: `all .1s ${variables.easeOut}`,
      textDecoration: 'none',
      userSelect: 'none',
      textAlign: 'center',

      '&:disabled': {
        cursor: 'not-allowed',
      },

      '&:hover': {
        cursor: 'pointer',
      },
    },

    block: {
      display: 'block',
      width: '100%',
    },

    xs: {
      fontSize: '12px',
      padding: '4px',
    },

    sm: {
      fontSize: '14px',
      padding: '7px',
    },

    md: {
      fontSize: '16px',
      padding: '10px',
    },

    lg: {
      fontSize: '18px',
      padding: '13px',
    },

    primary: {
      background: palette.variant.primary,
      border: `2px solid ${palette.variant.primary}`,
      color: palette.shades.dark.text.default,

      '&:hover': {
        background: focusColor(palette.variant.primary),
        borderColor: focusColor(palette.variant.primary),
      },

      '&:disabled': {
        background: palette.background.muted,
        border: `2px solid ${palette.background.muted}`,
        color: palette.text.muted,

        '&:hover': {
          background: palette.background.muted,
          borderColor: palette.background.muted,
        },
      },

      '&.success': buttonModifierFn('primary', palette.variant.success, focusColor(palette.variant.success)),
      '&.warning': {
        ...buttonModifierFn('primary', palette.variant.warning, focusColor(palette.variant.warning)),
        color: palette.text.default,
      },
      '&.danger': buttonModifierFn('primary', palette.variant.danger, focusColor(palette.variant.danger)),
    },

    secondary: {
      background: 'none',
      color: palette.variant.primary,
      border: `2px solid ${palette.variant.primary}`,

      '&:hover': {
        color: c(palette.variant.primary).darken(0.1).hex(),
        borderColor: c(palette.variant.primary).darken(0.1).hex(),
      },

      '&:disabled': {
        border: `2px solid ${palette.background.muted}`,
        color: palette.background.muted,

        '&:hover': {
          color: palette.background.muted,
          borderColor: palette.background.muted,
        },
      },

      '&.success': buttonModifierFn('secondary', palette.variant.success, focusColor(palette.variant.success)),
      '&.warning': buttonModifierFn('secondary', palette.variant.warning, focusColor(palette.variant.warning)),
      '&.danger': buttonModifierFn('secondary', palette.variant.danger, focusColor(palette.variant.danger)),
    },

    link: {
      background: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      color: palette.variant.primary,
      border: '2px solid transparent',
      fontWeight: 600,
      cursor: 'pointer',

      '&:hover': {
        color: c(palette.variant.primary).darken(0.2).hex(), // was $color-primary-dark
      },

      '&:disabled': {
        color: palette.background.muted,

        '&:hover': {
          color: palette.background.muted,
        },
      },

      '&.success': buttonModifierFn('link', palette.variant.success, focusColor(palette.variant.success)),
      '&.warning': buttonModifierFn('link', palette.variant.warning, focusColor(palette.variant.warning)),
      '&.danger': buttonModifierFn('link', palette.variant.danger, focusColor(palette.variant.danger)),
    },
  };
});
