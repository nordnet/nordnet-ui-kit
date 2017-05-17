import { createStyleSheet } from 'jss-theme-reactor';
import c from 'color';

// This function was created because 'focused' versions on colors were not found in the palette
const focusColor = color => c(color).darken(0.1).hex();
const disableColor = color => c(color).lighten(0.7).hex();

const buttonModifierFn = (variant, color, colorFocus, colorDisabled) => {
  const variantDict = {
    primary: {
      background: color,
      borderColor: color,

      '&:hover': {
        background: colorFocus,
        borderColor: colorFocus,
      },

      '&:disabled': {
        background: colorDisabled,
        borderColor: colorDisabled,
        color: '#fff',
      },

      '&:focus': {
        boxShadow: `0 0 0 2px ${colorFocus}`,
      },
    },

    secondary: {
      color,
      borderColor: color,

      '&:hover': {
        color: colorFocus,
        borderColor: colorFocus,
      },

      '&:disabled': {
        color: colorDisabled,
        borderColor: colorDisabled,
      },

      '&:focus': {
        boxShadow: `0 0 0 2px ${colorFocus}`,
      },
    },

    link: {
      color,

      '&:hover': {
        color: colorFocus,
      },

      '&:focus&::after': {
        boxShadow: `0 4px 0 -2px ${colorFocus}`,
      },
    },
  };

  return {
    ...variantDict[variant],
  };
};

export default createStyleSheet('Button', theme => {
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

      '&:hover:not(:disabled)': {
        cursor: 'pointer',
      },

      '&:focus': {
        outline: 'none',
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
      },

      '&:focus': {
        boxShadow: `0 0 0 2px ${focusColor(palette.background.secondary)}`,
      },

      '&.action': buttonModifierFn(
        'primary',
        palette.variant.primary,
        focusColor(palette.variant.primary),
        disableColor(palette.variant.primary),
      ),
      '&.success': buttonModifierFn(
        'primary',
        palette.variant.success,
        focusColor(palette.variant.success),
        disableColor(palette.variant.success),
      ),
      '&.warning': {
        ...buttonModifierFn(
          'primary',
          palette.variant.warning,
          focusColor(palette.variant.warning),
          c(palette.variant.warning).lighten(0.3).hex(),
        ),
        color: `${palette.text.default}!important`,
      },
      '&.danger': buttonModifierFn(
        'primary',
        palette.variant.danger,
        focusColor(palette.variant.danger),
        disableColor(palette.variant.danger),
      ),
    },

    secondary: {
      background: 'none',
      color: palette.color.grayDark,
      border: `2px solid ${palette.color.gray}`,

      '&:hover': {
        color: c(palette.color.grayDark).darken(0.1).hex(),
        borderColor: c(palette.color.gray).darken(0.1).hex(),
      },

      '&:disabled': {
        border: `2px solid ${palette.background.muted}`,
        color: palette.background.muted,
      },

      '&:focus': {
        boxShadow: `0 0 0 2px ${c(palette.color.gray).darken(0.1).hex()}`,
      },

      '&.xs,&.sm': {
        borderWidth: '1px',
      },

      '&.action': buttonModifierFn(
        'secondary',
        palette.variant.primary,
        focusColor(palette.variant.primary),
        disableColor(palette.variant.primary),
      ),
      '&.success': buttonModifierFn(
        'secondary',
        palette.variant.success,
        focusColor(palette.variant.success),
        disableColor(palette.variant.success),
      ),
      '&.warning': {
        ...buttonModifierFn(
          'secondary',
          palette.variant.warning,
          focusColor(palette.variant.warning),
          c(palette.variant.warning).lighten(0.3).hex(),
        ),
        color: `${palette.text.default}!important`,
      },
      '&.danger': buttonModifierFn(
        'secondary',
        palette.variant.danger,
        focusColor(palette.variant.danger),
        disableColor(palette.variant.danger),
      ),
    },

    link: {
      position: 'relative',
      background: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      color: palette.text.default,
      border: '2px solid transparent',
      fontWeight: 600,
      cursor: 'pointer',

      '&::after': {
        position: 'absolute',
        content: '""',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        marginBottom: 3,
        transition: transitions.create(),
      },

      '&:focus': {
        boxShadow: 'none',

        '&::after': {
          boxShadow: `0 4px 0 -2px ${palette.background.secondary}`,
        },
      },

      '&:hover': {
        color: palette.color.grayDark, // was $color-primary-dark
      },

      '&:disabled': {
        color: palette.color.gray,
      },

      '&.action': buttonModifierFn('link', palette.variant.primary, focusColor(palette.variant.primary)),
      '&.success': buttonModifierFn('link', palette.variant.success, focusColor(palette.variant.success)),
      '&.warning': buttonModifierFn('link', palette.variant.warning, focusColor(palette.variant.warning)),
      '&.danger': buttonModifierFn('link', palette.variant.danger, focusColor(palette.variant.danger)),
    },
  };
});
