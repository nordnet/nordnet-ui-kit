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
      padding: '2px 10px 3px',

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
      borderRadius: 16,
      padding: '5px 12px 6px',

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
      borderRadius: 20,
      padding: '10px 34px 11px',

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
      background: palette.gray5,
      border: `2px solid ${palette.gray5}`,
      color: palette.gray0,

      '&:hover': {
        background: focusColor(palette.gray5),
        borderColor: focusColor(palette.gray5),
      },

      '&:disabled': {
        background: palette.gray7,
        borderColor: palette.gray7,
        color: palette.gray0,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${focusColor(palette.gray5)}`,
      },

      '&.action': buttonModifierFn(
        'primary',
        palette.cta,
        focusColor(palette.cta),
        disableColor(palette.cta),
        palette.gray0,
      ),
      '&.success': buttonModifierFn(
        'primary',
        palette.positive,
        focusColor(palette.positive),
        disableColor(palette.positive),
        palette.gray0,
      ),
      '&.warning': {
        ...buttonModifierFn(
          'primary',
          palette.index,
          focusColor(palette.index),
          c(palette.index)
            .lighten(0.3)
            .hex(),
          palette.gray0,
        ),
        color: palette.gray0,
      },
      '&.danger': buttonModifierFn(
        'primary',
        palette.negative,
        focusColor(palette.negative),
        c(palette.negative)
          .lighten(0.3)
          .hex(),
        palette.gray0,
      ),
    },

    secondary: {
      background: 'none',
      color: palette.gray0,
      border: `2px solid ${palette.gray4}`,

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

      '&.xs,&.sm': {
        borderWidth: 1,
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
      '&.warning': {
        ...buttonModifierFn(
          'secondary',
          palette.index,
          focusColor(palette.index),
          palette.gray6,
          palette.gray4,
        ),
      },
      '&.danger': buttonModifierFn(
        'secondary',
        palette.negative,
        focusColor(palette.negative),
        palette.gray6,
        palette.gray4,
      ),
    },

    link: {
      position: 'relative',
      background: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      color: palette.gray0,
      border: '2px solid transparent',
      // FIXME: talk to designers
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
          boxShadow: `0 4px 0 -2px ${palette.gray5}`,
        },
      },

      '&:hover': {
        color: palette.gray0, // was $color-primary-dark
      },

      '&:disabled': {
        color: palette.gray4,
      },

      '&.action': buttonModifierFn(
        'link',
        palette.cta,
        focusColor(palette.cta),
      ),

      '&.success': buttonModifierFn(
        'link',
        palette.positive,
        focusColor(palette.positive),
      ),

      '&.warning': buttonModifierFn(
        'link',
        palette.index,
        focusColor(palette.index),
      ),

      '&.danger': buttonModifierFn(
        'link',
        palette.negative,
        focusColor(palette.negative),
      ),
    },
  };
};
