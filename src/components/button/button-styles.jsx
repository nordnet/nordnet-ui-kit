import c from 'color';
// This function was created because 'focused' versions on colors were not found in the palette
const focusColor = color =>
  c(color)
    .darken(0.1)
    .hex();
const disableColor = color =>
  c(color)
    .lighten(0.7)
    .hex();

const buttonModifierFn = (variant, color, colorFocus, colorDisabled, textColorDisabled) => {
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
        color: textColorDisabled,
      },

      '&:focus, &:active': {
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
        color: textColorDisabled,
        borderColor: colorDisabled,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${colorFocus}`,
      },
    },

    link: {
      color,

      '&:hover': {
        color: colorFocus,
      },

      '&:focus&::after, &:active&::after': {
        boxShadow: `0 4px 0 -2px ${colorFocus}`,
      },
    },
  };

  return {
    ...variantDict[variant],
  };
};

export default theme => {
  const { palette, transitions, typography, mixins } = theme;

  return {
    button: {
      ...mixins.basicBoxSizing,
      display: 'inline-block',
      border: 0,
      margin: 2,
      borderRadius: 16,
      ...typography.caption({
        weight: 'regular',
      }),
      transition: transitions.create(),
      textDecoration: 'none',
      userSelect: 'none',
      textAlign: 'center',

      '& > span': {
        position: 'relative',
      },

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
      borderRadius: 12,
      padding: '5px 12px',

      '&$iconText': {
        paddingBottom: 5,
        paddingTop: 4,
      },

      '&$icon': {
        padding: 4,
        '& svg': {
          height: 11,
          width: 11,
        },
      },

      ...typography.caption({
        weight: 'regular',
      }),
    },

    sm: {
      borderRadius: 16,
      padding: '8px 20px',

      '&$iconText': {
        paddingBottom: 7,
        paddingTop: 7,
      },

      '&$icon': {
        padding: 6,
        '& svg': {
          height: 13,
          width: 13,
        },
      },

      ...typography.caption({
        weight: 'regular',
      }),
    },

    md: {
      borderRadius: 20,
      padding: '11px 38px',

      '&$iconText': {
        paddingBottom: 10,
        paddingTop: 10,
      },

      '&$icon': {
        padding: 8,
        '& svg': {
          height: 16,
          width: 16,
        },
      },

      ...typography.secondary({
        weight: 'regular',
      }),
    },

    lg: {
      borderRadius: 24,
      padding: '14px 40px',

      '&$iconText': {
        paddingBottom: 13,
        paddingTop: 13,
      },

      '&$icon': {
        padding: 10,
        '& svg': {
          height: 18,
          width: 18,
        },
      },

      ...typography.primary({
        weight: 'regular',
      }),
    },

    icon: {
      borderRadius: '50%',
    },

    iconAbove: {
      flexDirection: 'column',
    },

    iconText: {},

    innerWrapper: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },

    spaceLeft: {
      marginLeft: '0.5em',
    },

    spaceAbove: {
      marginTop: 4,
    },

    primary: {
      background: palette.label,
      border: `2px solid ${palette.label}`,
      // color: palette.shades.dark.text.default,
      color: palette.buttonText,

      '&:hover': {
        background: focusColor(palette.label),
        borderColor: focusColor(palette.label),
      },

      '&:disabled': {
        background: palette.disabledButtonBackgroundPrimary,
        borderColor: palette.disabledButtonBackgroundPrimary,
        color: palette.disabledButtonText,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${focusColor(palette.label)}`,
      },

      '&.action': buttonModifierFn(
        'primary',
        palette.cta,
        focusColor(palette.cta),
        palette.disabledButtonBackgroundPrimary,
        palette.disabledButtonText,
      ),
      '&.success': buttonModifierFn(
        'primary',
        palette.positive,
        focusColor(palette.positive),
        palette.disabledButtonBackgroundPrimary,
        palette.disabledButtonText,
      ),
      '&.warning': buttonModifierFn(
        'primary',
        palette.warning,
        focusColor(palette.warning),
        palette.disabledButtonBackgroundPrimary,
        palette.disabledButtonText,
      ),

      '&.danger': buttonModifierFn(
        'primary',
        palette.negative,
        focusColor(palette.negative),
        palette.disabledButtonBackgroundPrimary,
        palette.disabledButtonText,
      ),
    },

    secondary: {
      background: palette.module,
      color: palette.text,
      border: `2px solid ${palette.text}`,

      '&:hover': {
        color: focusColor(palette.text),
        borderColor: focusColor(palette.text),
      },

      '&:disabled': {
        borderColor: palette.disabledButtonBackgroundSecondary,
        color: palette.disabledButtonText,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${focusColor(palette.text)}`,
      },
      '&.xs,&.sm': {
        borderWidth: 1,
      },

      '&.action': buttonModifierFn(
        'secondary',
        palette.cta,
        focusColor(palette.cta),
        palette.disabledButtonBackgroundSecondary,
        palette.disabledButtonText,
      ),
      '&.success': buttonModifierFn(
        'secondary',
        palette.positive,
        focusColor(palette.positive),
        palette.disabledButtonBackgroundSecondary,
        palette.disabledButtonText,
      ),
      '&.warning': buttonModifierFn(
        'secondary',
        palette.warning,
        focusColor(palette.warning),
        palette.disabledButtonBackgroundSecondary,
        palette.disabledButtonText,
      ),
      '&.danger': buttonModifierFn(
        'secondary',
        palette.negative,
        focusColor(palette.negative),
        palette.disabledButtonBackgroundSecondary,
        palette.disabledButtonText,
      ),
    },

    link: {
      position: 'relative',
      background: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      color: palette.text,
      border: '2px solid transparent',
      // FIXME: talk to designers,
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

      '&:focus, &:active': {
        boxShadow: 'none',

        '&::after': {
          boxShadow: `0 4px 0 -2px ${palette.text}`,
        },
      },

      '&:hover': {
        color: focusColor(palette.text), // was $color-primary-dark
      },

      '&:disabled': {
        color: disableColor(palette.text),
      },

      '&.action': buttonModifierFn('link', palette.cta, focusColor(palette.cta)),

      '&.success': buttonModifierFn('link', palette.positive, focusColor(palette.positive)),

      '&.warning': buttonModifierFn('link', palette.warning, focusColor(palette.warning)),

      '&.danger': buttonModifierFn('link', palette.negative, focusColor(palette.negative)),
    },
  };
};
