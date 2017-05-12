import { createStyleSheet } from 'jss-theme-reactor';
import c from 'color';

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
  const { palette, transitions, typography, mixins } = theme;

  return {
    button: {
      ...mixins.basicBoxSizing,
      display: 'inline-block',
      border: 0,
      borderRadius: '16px',
      fontFamily: typography.primary.fontFamily,
      lineHeight: 1,
      transition: transitions.create(),
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
      borderRadius: '12px',
      padding: '4px 10px',
    },

    sm: {
      fontSize: '14px',
      borderRadius: '16px',
      padding: '7px 15px',
    },

    md: {
      fontSize: '16px',
      borderRadius: '20px',
      padding: '10px 18px',
    },

    lg: {
      fontSize: '18px',
      borderRadius: '24px',
      padding: '13px 24px',
    },

    primary: {
      background: palette.background.secondary,
      border: `2px solid ${palette.background.secondary}`,
      color: palette.shades.dark.text.default,

      '&:hover': {
        background: focusColor(palette.background.secondary),
        borderColor: focusColor(palette.background.secondary),
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

      '&.action': buttonModifierFn('primary', palette.variant.primary, focusColor(palette.variant.primary)),
      '&.success': buttonModifierFn('primary', palette.variant.success, focusColor(palette.variant.success)),
      '&.warning': {
        ...buttonModifierFn('primary', palette.variant.warning, focusColor(palette.variant.warning)),
        color: palette.text.default,
      },
      '&.danger': buttonModifierFn('primary', palette.variant.danger, focusColor(palette.variant.danger)),
    },

    secondary: {
      background: 'none',
      color: palette.background.secondary,
      border: `2px solid ${palette.background.secondary}`,

      '&:hover': {
        color: c(palette.background.secondary).darken(0.1).hex(),
        borderColor: c(palette.background.secondary).darken(0.1).hex(),
      },

      '&:disabled': {
        border: `2px solid ${palette.background.muted}`,
        color: palette.background.muted,

        '&:hover': {
          color: palette.background.muted,
          borderColor: palette.background.muted,
        },
      },

      '&.action': buttonModifierFn('secondary', palette.variant.primary, focusColor(palette.variant.primary)),
      '&.success': buttonModifierFn('secondary', palette.variant.success, focusColor(palette.variant.success)),
      '&.warning': buttonModifierFn('secondary', palette.variant.warning, focusColor(palette.variant.warning)),
      '&.danger': buttonModifierFn('secondary', palette.variant.danger, focusColor(palette.variant.danger)),
    },

    link: {
      background: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      color: palette.background.secondary,
      border: '2px solid transparent',
      fontWeight: 600,
      cursor: 'pointer',

      '&:hover': {
        color: c(palette.background.secondary).darken(0.2).hex(), // was $color-primary-dark
      },

      '&:disabled': {
        color: palette.background.muted,

        '&:hover': {
          color: palette.background.muted,
        },
      },

      '&.action': buttonModifierFn('link', palette.variant.primary, focusColor(palette.variant.primary)),
      '&.success': buttonModifierFn('link', palette.variant.success, focusColor(palette.variant.success)),
      '&.warning': buttonModifierFn('link', palette.variant.warning, focusColor(palette.variant.warning)),
      '&.danger': buttonModifierFn('link', palette.variant.danger, focusColor(palette.variant.danger)),
    },
  };
});
