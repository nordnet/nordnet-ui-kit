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
  };
  return {
    ...variantDict[variant],
  };
};

export default theme => {
  const { palette, transitions, typography, mixins } = theme;
  const sizeDict = {
    xs: {
      radius: 8,
      ...typography.caption(),
    },

    sm: {
      radius: 16,
      ...typography.caption(),
    },

    md: {
      radius: 20,
      ...typography.secondary(),
    },

    lg: {
      radius: 24,
      ...typography.primary(),
    },
  };

  return {
    progressBarContainer: {
      width: '100%',
    },

    ariaProgressBar: {
      ...mixins.screenReadersOnly,
    },

    progressBar: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: ({ size }) => -sizeDict[size].radius / 2,
    },

    progressStep: {
      ...typography.primary(),
      ...mixins.basicBoxSizing,
      alignItems: 'center',
      border: 0,
      borderRadius: '50%',
      borderWidth: 1,
      cursor: 'default',
      display: 'flex',
      fontSize: ({ size }) => sizeDict[size].fontSize,
      fontWeight: ({ size }) => sizeDict[size].fontWeight,
      height: ({ size }) => 2 * sizeDict[size].radius,
      margin: ({ size }) => sizeDict[size].radius / 2,
      padding: 0,
      textAlign: 'center',
      textDecoration: 'none',
      transition: transitions.create(),
      userSelect: 'none',
      width: ({ size }) => 2 * sizeDict[size].radius,

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

    reached: {},
    active: {},

    primary: {
      ...variantModifierFn('primary', {
        background: palette.gray7,
        backgroundDisabled: palette.gray7,
        borderColor: palette.gray4,
        color: palette.gray0,
        colorDisabled: palette.gray4,
      }),

      '&$reached': variantModifierFn('primary', {
        background: palette.cta,
        borderColor: palette.cta,
        color: palette.gray7,
        colorDisabled: palette.white,
      }),

      '&$active': variantModifierFn('primary', {
        background: palette.cta,
        borderColor: palette.cta,
      }),
    },
  };
};
