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
      background: palette.background.secondary,
      border: `2px solid ${palette.background.secondary}`,
      color: palette.shades.dark.text.default,

      '&:hover': {
        background: focusColor(palette.background.secondary),
        borderColor: focusColor(palette.background.secondary),
      },

      '&:disabled': {
        background: palette.background.muted,
        borderColor: palette.background.muted,
        color: palette.text.muted,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${focusColor(palette.background.secondary)}`,
      },

      '&.action': buttonModifierFn(
        'primary',
        palette.variant.primary,
        focusColor(palette.variant.primary),
        disableColor(palette.variant.primary),
        palette.shades.dark.text.default,
      ),
      '&.success': buttonModifierFn(
        'primary',
        palette.variant.success,
        focusColor(palette.variant.success),
        disableColor(palette.variant.success),
        palette.shades.dark.text.default,
      ),
      '&.warning': {
        ...buttonModifierFn(
          'primary',
          palette.variant.warning,
          focusColor(palette.variant.warning),
          c(palette.variant.warning)
            .lighten(0.3)
            .hex(),
          palette.text.default,
        ),
        color: palette.text.default,
      },
      '&.danger': buttonModifierFn(
        'primary',
        palette.variant.danger,
        focusColor(palette.variant.danger),
        c(palette.variant.danger)
          .lighten(0.3)
          .hex(),
        palette.shades.dark.text.default,
      ),
    },

    secondary: {
      background: 'none',
      color: palette.color.grayDark,
      border: `2px solid ${palette.color.gray}`,

      '&:hover': {
        color: c(palette.color.grayDark)
          .darken(0.1)
          .hex(),
        borderColor: c(palette.color.gray)
          .darken(0.1)
          .hex(),
      },

      '&:disabled': {
        borderColor: palette.color.grayLighter,
        color: palette.color.gray,
      },

      '&:focus, &:active': {
        boxShadow: `0 0 0 2px ${c(palette.color.gray)
          .darken(0.1)
          .hex()}`,
      },

      '&.xs,&.sm': {
        borderWidth: 1,
      },

      '&.action': buttonModifierFn(
        'secondary',
        palette.variant.primary,
        focusColor(palette.variant.primary),
        palette.color.grayLighter,
        palette.color.gray,
      ),
      '&.success': buttonModifierFn(
        'secondary',
        palette.variant.success,
        focusColor(palette.variant.success),
        palette.color.grayLighter,
        palette.color.gray,
      ),
      '&.warning': {
        ...buttonModifierFn(
          'secondary',
          palette.variant.warning,
          focusColor(palette.variant.warning),
          palette.color.grayLighter,
          palette.color.gray,
        ),
      },
      '&.danger': buttonModifierFn(
        'secondary',
        palette.variant.danger,
        focusColor(palette.variant.danger),
        palette.color.grayLighter,
        palette.color.gray,
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
          boxShadow: `0 4px 0 -2px ${palette.background.secondary}`,
        },
      },

      '&:hover': {
        color: palette.color.grayDark, // was $color-primary-dark
      },

      '&:disabled': {
        color: palette.color.gray,
      },

      '&.action': buttonModifierFn(
        'link',
        palette.variant.primary,
        focusColor(palette.variant.primary),
      ),

      '&.success': buttonModifierFn(
        'link',
        palette.variant.success,
        focusColor(palette.variant.success),
      ),

      '&.warning': buttonModifierFn(
        'link',
        palette.variant.warning,
        focusColor(palette.variant.warning),
      ),

      '&.danger': buttonModifierFn(
        'link',
        palette.variant.danger,
        focusColor(palette.variant.danger),
      ),
    },
  };
};
