import c from 'color';
import { lightScheme } from '../../styles/color';
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
  const { transitions, typography, mixins } = theme;

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
      background: lightScheme.label,
      border: `2px solid ${lightScheme.label}`,
      // color: palette.shades.dark.text.default,
      color: lightScheme.buttonText,

      '&:hover': {
        background: focusColor(lightScheme.label),
        borderColor: focusColor(lightScheme.label),
      },

      '&:disabled': {
        background: lightScheme.disabledButtonBackground,
        borderColor: lightScheme.disabledButtonBackground,
        color: lightScheme.disabledButtonText,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${focusColor(lightScheme.label)}`,
      },

      '&.action': buttonModifierFn(
        'primary',
        lightScheme.cta,
        focusColor(lightScheme.cta),
        disableColor(lightScheme.cta),
        lightScheme.disabledButtonText,
      ),
      '&.success': buttonModifierFn(
        'primary',
        lightScheme.positive,
        focusColor(lightScheme.positive),
        disableColor(lightScheme.positive),
        lightScheme.disabledButtonText,
      ),
      '&.warning': buttonModifierFn(
        'primary',
        lightScheme.warning,
        focusColor(lightScheme.warning),
        disableColor(lightScheme.warning),
        lightScheme.disabledButtonText,
      ),

      '&.danger': buttonModifierFn(
        'primary',
        lightScheme.negative,
        focusColor(lightScheme.negative),
        disableColor(lightScheme.negative),
        lightScheme.disabledButtonText,
      ),
    },

    secondary: {
      background: lightScheme.module,
      color: lightScheme.text,
      border: `2px solid ${lightScheme.text}`,

      '&:hover': {
        color: focusColor(lightScheme.text),
        borderColor: focusColor(lightScheme.text),
      },

      '&:disabled': {
        borderColor: lightScheme.disabledButtonBackground,
        color: lightScheme.disabledButtonBackground,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${focusColor(lightScheme.text)}`,
      },
      '&.xs,&.sm': {
        borderWidth: 1,
      },

      '&.action': buttonModifierFn(
        'secondary',
        lightScheme.cta,
        focusColor(lightScheme.cta),
        lightScheme.disabledButtonBackground,
        lightScheme.disabledButtonBackground,
      ),
      '&.success': buttonModifierFn(
        'secondary',
        lightScheme.positive,
        focusColor(lightScheme.positive),
        lightScheme.disabledButtonBackground,
        lightScheme.disabledButtonBackground,
      ),
      '&.warning': buttonModifierFn(
        'secondary',
        lightScheme.warning,
        focusColor(lightScheme.warning),
        lightScheme.disabledButtonBackground,
        lightScheme.disabledButtonBackground,
      ),
      '&.danger': buttonModifierFn(
        'secondary',
        lightScheme.negative,
        focusColor(lightScheme.negative),
        lightScheme.disabledButtonBackground,
        lightScheme.disabledButtonBackground,
      ),
    },

    link: {
      position: 'relative',
      background: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      color: lightScheme.text,
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
          boxShadow: `0 4px 0 -2px ${lightScheme.text}`,
        },
      },

      '&:hover': {
        color: focusColor(lightScheme.text), // was $color-primary-dark
      },

      '&:disabled': {
        color: disableColor(lightScheme.text),
      },

      '&.action': buttonModifierFn('link', lightScheme.cta, focusColor(lightScheme.cta)),

      '&.success': buttonModifierFn('link', lightScheme.positive, focusColor(lightScheme.positive)),

      '&.warning': buttonModifierFn('link', lightScheme.warning, focusColor(lightScheme.warning)),

      '&.danger': buttonModifierFn('link', lightScheme.negative, focusColor(lightScheme.negative)),
    },
  };
};
