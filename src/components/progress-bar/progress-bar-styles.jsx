import c from 'color';

// This function was created because 'focused' versions on colors were not found in the palette
const focusColor = color => c(color).darken(0.1).hex();
const disableColor = color => c(color).lighten(0.7).hex();

const variantModifierFn = (variant, colors) => {
  const { background, backgroundDisabled, borderColor, color, colorDisabled } = colors;

  const variantDict = {
    primary: {
      background,
      borderColor,
      borderStyle: 'solid',
      color,

      '&$clickable:hover:not(:disabled)': {
        background: focusColor(background),
        borderColor: focusColor(borderColor),
      },

      '&:disabled': {
        background: backgroundDisabled || disableColor(background),
        borderColor: backgroundDisabled || disableColor(borderColor),
        color: colorDisabled,
      },

      '&$clickable:focus': {
        boxShadow: `0 0 0 2px ${focusColor(borderColor)}`,
      },
    },

    secondary: {
      background,
      borderColor,
      borderStyle: 'solid',
      color,

      '&$clickable:hover:not(:disabled)': {
        borderColor: focusColor(borderColor),
        color: focusColor(color),
      },

      '&:disabled': {
        background: backgroundDisabled || disableColor(background),
        borderColor: disableColor(borderColor),
        color: colorDisabled,
      },

      '&$clickable:focus': {
        boxShadow: `0 0 0 2px ${focusColor(borderColor)}`,
      },
    },
  };
  return {
    ...variantDict[variant],
  };
};

const sizeModifierFn = ({ typography }, { fontSize, radius }) => ({
  borderRadius: '50%',
  borderWidth: fontSize < 12 ? 1 : 2,
  fontSize,
  fontWeight: fontSize < 12 ? typography.fontWeightLight : typography.fontWeightRegular,
  height: 2 * radius,
  width: 2 * radius,

  '& + &': {
    marginLeft: radius,
  },
});

export default theme => {
  const { palette, transitions, typography, mixins } = theme;

  return {
    progressBarContainer: {
      width: '100%',
    },

    ariaProgressBar: {
      ...mixins.screenReadersOnly,
    },

    progressBar: {
      display: 'flex',
    },

    progressStep: {
      ...mixins.basicBoxSizing,
      alignItems: 'center',
      border: 0,
      cursor: 'default',
      display: 'flex',
      fontFamily: typography.primary.fontFamily,
      lineHeight: 1,
      padding: 0,
      textAlign: 'center',
      textDecoration: 'none',
      transition: transitions.create(),
      userSelect: 'none',

      '& > span': {
        margin: 'auto',
      },
    },

    clickable: {
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

    xs: sizeModifierFn(theme, { fontSize: 10, radius: 8 }),
    sm: sizeModifierFn(theme, { fontSize: 11, radius: 16 }),
    md: sizeModifierFn(theme, { fontSize: 14, radius: 20 }),
    lg: sizeModifierFn(theme, { fontSize: 16, radius: 24 }),

    reached: {},

    primary: {
      ...variantModifierFn('primary', {
        background: palette.background.secondary,
        backgroundDisabled: palette.background.muted,
        borderColor: palette.background.secondary,
        color: palette.shades.dark.text.default,
        colorDisabled: palette.action.disabled,
      }),

      '&$reached': variantModifierFn('primary', {
        background: palette.shades.dark.background.default,
        borderColor: palette.shades.dark.background.default,
        color: palette.shades.dark.text.default,
        colorDisabled: palette.shades.dark.text.muted,
      }),
    },

    secondary: {
      ...variantModifierFn('secondary', {
        background: 'transparent',
        backgroundDisabled: 'transparent',
        borderColor: palette.shades.dark.background.default,
        color: palette.text.default,
        colorDisabled: palette.action.disabled,
      }),

      '&$reached': variantModifierFn('secondary', {
        background: palette.shades.dark.background.default,
        borderColor: palette.shades.dark.background.default,
        color: palette.shades.dark.text.default,
        colorDisabled: palette.shades.dark.text.muted,
      }),
    },
  };
};
