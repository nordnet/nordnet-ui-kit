import c from 'color';

// This function was created because 'focused' versions on colors were not found in the palette
const focusColor = color =>
  c(color)
    .darken(0.1)
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
        textDecoration: 'underline',
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
      border: `2px solid ${palette.cta}`,
      margin: 2,
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
      padding: '1px 4px 3px',

      '&$iconText': {
        paddingBottom: 3,
        paddingTop: 2,
      },

      '&$icon': {
        padding: 4,
        '& svg': {
          height: 11,
          width: 11,
        },
      },

      ...typography.secondary({
        weight: 'regular',
      }),
    },

    sm: {
      padding: '4px 5px 5px',

      '&$iconText': {
        paddingBottom: 6,
        paddingTop: 5,
      },

      '&$icon': {
        padding: 6,
        '& svg': {
          height: 13,
          width: 13,
        },
      },

      ...typography.secondary({
        weight: 'regular',
      }),
    },

    md: {
      padding: '8px 32px 9px',

      '&$iconText': {
        paddingBottom: 11,
        paddingTop: 10,
      },

      '&$icon': {
        padding: 8,
        '& svg': {
          height: 16,
          width: 16,
        },
      },

      ...typography.primary({
        weight: 'regular',
      }),
    },

    lg: {
      padding: '12px 38px',

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
      ...buttonModifierFn(
        'primary',
        palette.cta,
        focusColor(palette.cta),
        palette.gray5,
        palette.white,
      ),
      color: palette.white,

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${focusColor(palette.gray5)}`,
      },

      '&.action': buttonModifierFn(
        'primary',
        palette.cta,
        focusColor(palette.cta),
        palette.gray5,
        palette.white,
      ),
      '&.success': buttonModifierFn(
        'primary',
        palette.positive,
        focusColor(palette.positive),
        palette.gray5,
        palette.white,
      ),
      '&.danger': buttonModifierFn(
        'primary',
        palette.negative,
        focusColor(palette.negative),
        palette.gray5,
        palette.white,
      ),
    },

    secondary: {
      ...buttonModifierFn(
        'secondary',
        palette.cta,
        focusColor(palette.cta),
        palette.gray6,
        palette.gray4,
      ),
      backgroundColor: palette.white,

      '&:hover': {
        color: c(palette.gray0)
          .darken(0.1)
          .hex(),
        borderColor: c(palette.gray4)
          .darken(0.1)
          .hex(),
      },

      '&:disabled': {
        borderColor: palette.gray6,
        color: palette.gray4,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${c(palette.gray4)
          .darken(0.1)
          .hex()}`,
      },

      '&.action': buttonModifierFn(
        'secondary',
        palette.cta,
        focusColor(palette.cta),
        palette.gray6,
        palette.gray4,
      ),
      '&.success': buttonModifierFn(
        'secondary',
        palette.positive,
        focusColor(palette.positive),
        palette.gray6,
        palette.gray4,
      ),
      '&.danger': buttonModifierFn(
        'secondary',
        palette.negative,
        focusColor(palette.negative),
        palette.gray6,
        palette.gray4,
      ),
    },

    link: {
      ...buttonModifierFn('link', palette.cta, focusColor(palette.cta)),
      position: 'relative',
      background: 'none',
      paddingLeft: 0,
      paddingRight: 0,
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

      '&:hover': {
        color: palette.gray0, // was $color-primary-dark
      },

      '&:disabled': {
        color: palette.gray4,
      },

      '&': buttonModifierFn('link', palette.cta, focusColor(palette.cta)),

      '&.action': buttonModifierFn('link', palette.cta, focusColor(palette.cta)),

      '&.success': buttonModifierFn('link', palette.positive, focusColor(palette.positive)),

      '&.warning': buttonModifierFn('link', palette.negative, focusColor(palette.negative)),

      '&.danger': buttonModifierFn('link', palette.negative, focusColor(palette.negative)),
    },
  };
};
