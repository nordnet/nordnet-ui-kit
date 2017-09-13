import Color from 'color';

export default theme => {
  const { palette, transitions, mixins, typography } = theme;

  const disabledColor = color => Color(color).mix(Color(palette.action.disabled), 0.6).hex();

  const inputMarginBottom = 20;
  const borderSize = 1;
  const bottomBorderSize = 3;

  const modifierFn = color => ({
    marginBottom: ({ label }) => (label ? inputMarginBottom : 0),

    '& .input__label': {
      color,
    },

    '& .input__field': {
      borderBottom: `${bottomBorderSize}px solid ${color}`,
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
      fontSize: 14,
      fontFamily: typography.primary.fontFamily,
      color: palette.text.default,
      marginBottom: ({ label }) => bottomBorderSize - borderSize + (label ? inputMarginBottom : 0),
      position: 'relative',

      '&.input--has-success': modifierFn(palette.variant.success),
      '&.input--has-warning': modifierFn(palette.variant.warning),
      '&.input--has-error': {
        '& .input': {
          '&__label': {
            color: palette.variant.danger,
            opacity: 1,
            transform: 'translateY(15px)',
          },
        },
        ...modifierFn(palette.variant.danger),
      },

      '&.input--has-focus': {
        marginBottom: ({ label }) => (label ? inputMarginBottom : 0),
        '& .input': {
          '&__label': {
            color: palette.action.active,
            opacity: 1,
            transform: 'translateY(15px)',
          },

          '&__field': {
            borderColor: palette.action.active,
            borderBottom: `3px solid ${palette.action.active}`,
          },
        },

        '&.input--has-success': modifierFocusFn(palette.variant.success),
        '&.input--has-warning': modifierFocusFn(palette.variant.warning),
        '&.input--has-error': modifierFocusFn(palette.variant.danger),
      },

      '&.input--is-disabled': {
        color: palette.action.disabled,
        backgroundColor: palette.background.muted,

        '& .input': {
          '&__label': {
            color: palette.action.disabled,
          },

          '&__field': {
            borderColor: palette.action.disabled,

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
            fontSize: 12,
            color: palette.text.muted,

            '&--left': {
              left: 10,
              paddingRight: 8,
            },

            '&--right': {
              right: 10,
              paddingLeft: 8,
            },
          },
        },
      },

      '& .input__label': {
        position: 'absolute',
        bottom: '-4px',
        left: 0,
        cursor: 'text',
        transition: transitions.create(['opacity', 'transform', 'color']),
        fontSize: 12,
        transform: 'translateY(0)',
        opacity: 0,
        color: palette.action.disabled,
        pointerEvents: 'none',

        '&.input--has-focus, &.input--has-value': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
      '& .input__element': {
        display: 'block',
        background: 'none',
        border: 0,
        borderRadius: 0,
        width: '100%',
        transition: transitions.create(['border-color', 'transform']),
        fontSize: 14,
        maxHeight: 27,
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        minWidth: 0,

        '&:focus': {
          outline: 'none',
        },
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
    },

    primary: {
      '& .input__field': {
        position: 'relative',
        width: '100%',
        border: `${borderSize}px solid ${palette.action.disabled}`,
        borderRadius: 4,
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
        borderBottom: `${borderSize}px solid ${palette.action.disabled}`,
        paddingTop: 10,
        transition: transitions.create(['border-color']),
      },
    },
  };
};
