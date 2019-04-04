import Color from 'color';

export default theme => {
  const { palette, transitions, mixins, typography } = theme;

  const disabledColor = color =>
    Color(color)
      .mix(Color(palette.gray4), 0.6)
      .hex();

  const inputMarginBottom = 20;
  const borderSize = 1;
  const bottomBorderSize = 1;

  const modifierFn = color => ({
    marginBottom: ({ label, helpText }) => (label || helpText ? inputMarginBottom : 0),

    '& .input__label': {
      color,
    },

    '& .input__field': {
      borderBottom: `${bottomBorderSize}px solid ${color}`,
      marginBottom: ({ label, helpText }) =>
        label && helpText && helpText.length > 32 ? inputMarginBottom : 0,
    },

    '&--is-disabled': {
      '& .input': {
        '&__label': {
          color: disabledColor(color),
        },

        '&__field': {
          borderBottom: `${bottomBorderSize}px solid ${disabledColor(color)}`,
        },
      },
    },
  });

  const modifierFocusFn = color => ({
    '& .input': {
      '&__label': {
        color,
      },

      '&__field': {
        borderColor: color,
        borderBottom: `${bottomBorderSize}px solid ${color}`,
      },
    },
  });

  return {
    input: {
      ...mixins.basicBoxSizing,
      color: palette.gray0,
      marginBottom: ({ label }) => bottomBorderSize - borderSize + (label ? inputMarginBottom : 0),
      position: 'relative',
      '&.input--has-success': modifierFn(palette.positive),
      '&.input--has-warning': modifierFn(palette.negative),

      '&.input--has-error': {
        '& .input': {
          '&__label': {
            color: palette.negative,
            opacity: 1,
            transform: 'translateY(15px)',
          },
        },
        ...modifierFn(palette.negative),
      },

      '&.input--has-focus': {
        marginBottom: ({ label }) => (label ? inputMarginBottom : 0),
        '& .input': {
          '&__label': {
            color: palette.cta,
            opacity: 1,
            transform: 'translateY(15px)',
          },

          '&__field': {
            borderColor: palette.cta,
            borderBottom: `1px solid ${palette.cta}`,
          },
        },

        '&.input--has-success': modifierFocusFn(palette.positive),
        '&.input--has-warning': modifierFocusFn(palette.index),
        '&.input--has-error': modifierFocusFn(palette.negative),
      },

      '&.input--is-disabled': {
        color: palette.gray4,
        backgroundColor: palette.gray7,

        '& .input': {
          '&__label': {
            color: palette.gray4,
          },

          '&__field': {
            borderColor: palette.gray4,

            '> input': {
              cursor: 'not-allowed',
            },
          },
        },
      },

      '&.input--has-addon': {
        '& .input': {
          '&__field': {
            display: 'flex',
            alignItems: 'baseline',
          },

          '&__element': {
            width: '100%',
          },

          '&__addon': {
            color: palette.gray0,

            '&--left': {
              left: 10,
              paddingRight: 8,
            },

            '&--right': {
              right: 10,
              paddingLeft: 8,
            },

            ...typography.tertiary(),
          },
        },
      },

      '& .input__label': {
        position: 'absolute',
        bottom: '-4px',
        left: 0,
        cursor: 'text',
        transition: transitions.create(['opacity', 'transform', 'color']),
        transform: 'translateY(0)',
        opacity: 0,
        color: palette.gray4,
        pointerEvents: 'none',

        '&.input--has-focus, &.input--has-value': {
          opacity: 1,
          transform: 'translateY(0)',
        },

        ...typography.tertiary(),
      },

      '& .input__element': {
        display: 'block',
        background: 'none',
        border: 0,
        borderRadius: 0,
        width: '100%',
        transition: transitions.create(['border-color', 'transform']),
        height: '1.5em',
        minWidth: 0,
        padding: 0,

        '&:focus': {
          outline: 'none',
        },

        '&:invalid, &:-moz-ui-invalid': {
          boxShadow: 'none',
        },

        '&--textarea': {
          maxHeight: 'none',
          resize: 'vertical',
          height: ({ lineCount }) => `${lineCount * 1.5}em`,
        },

        ...typography.secondary(),
      },

      '& .input__validation-icon': {
        position: 'absolute',
        display: 'block',
        right: 4,
        bottom: 10,
        height: 8,
        transition: transitions.create(),

        '> img': {
          display: 'block',
          maxHeight: '100%',
        },
      },

      ...typography.secondary(),
    },

    primary: {
      '& .input__field': {
        position: 'relative',
        width: '100%',
        border: `${borderSize}px solid ${palette.gray4}`,
        borderRadius: 0,
        padding: 8,
        paddingTop: 10,
        transition: transitions.create(['border-color']),
      },
    },

    secondary: {
      '& .input__field': {
        position: 'relative',
        width: '100%',
        padding: [8, 0],
        border: 'none',
        borderBottom: `${borderSize}px solid ${palette.gray4}`,
        paddingTop: 10,
        transition: transitions.create(['border-color']),
      },
    },
  };
};
