import { createStyleSheet } from 'jss-theme-reactor';
import Color from 'color';

export default createStyleSheet('InputDefault', (theme) => {
  const { palette, transitions } = theme;

  const disabledColor = color => Color(color).mix(Color(palette.action.disabled), 0.6).hex();

  const modifierFn = color => ({
    '& .input__label': {
      color,
    },

    '& .input__field': {
      borderColor: color,
    },

    '&--is-disabled': {
      '& .input': {
        '&__label': {
          color: disabledColor(color),
        },

        '&__field': {
          borderColor: disabledColor(color),
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
      },
    },
  });

  return {
    input: {
      fontSize: '16px',
      color: palette.text.default,
      marginBottom: '16px',
      position: 'relative',

      '&.input--has-success': modifierFn(palette.variant.success),
      '&.input--has-warning': modifierFn(palette.variant.warning),
      '&.input--has-error': modifierFn(palette.variant.danger),

      '&.input--has-focus': {
        '& .input': {
          '&__label': {
            color: palette.action.active,
            opacity: 1,
            transform: 'translateY(0)',
          },

          '&__field': {
            borderColor: palette.action.active,
          },
        },

        '& .input-has-success': modifierFocusFn(palette.variant.success),
        '& .input-has-warning': modifierFocusFn(palette.variant.warning),
        '& .input-has-error': modifierFocusFn(palette.variant.danger),
      },

      '&.input--has-success .input__field': {
        paddingRight: '16px',
      },

      '&.input--has-warning, &.input--has-error': {
        '& .input__field': {
          paddingRight: '8px',
        },
      },

      '&.input--is-disabled': {
        color: palette.action.disabled,

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
            display: 'table',
          },

          '&__element, &__addon': {
            display: 'table-cell',
          },

          '&__element': {
            width: '100%',
          },
        },
      },

      '& .input__field': {
        position: 'relative',
        width: '100%',
        borderBottom: `1px solid ${palette.action.disabled}`,
        paddingTop: '12px',
        transition: transitions.create(['border-color']),
      },

      '& .input__label': {
        position: 'absolute',
        top: '-4px',
        left: 0,
        cursor: 'text',
        transition: transitions.create(['opacity', 'transform', 'color']),
        fontSize: '12px',
        transform: 'translateY(11px)',
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
        padding: '0 0 5px',
        width: '100%',
        transition: transitions.create(['border-color', 'transform']),
        fontSize: '16px',
        transform: 'translateY(-4px)',
        maxHeight: '27px',
        fontFamily: 'inherit',
        fontWeight: 'inherit',

        '&.input--has-focus, &.input--has-value': {
          transform: 'translateY(0)',
        },

        '&:focus': {
          outline: 'none',
        },
      },

      '&.input--has-focus, &.input--has-value': {
        '& .input__element': {
          transform: 'translateY(0)',
        },
      },

      '& .input__validation-icon': {
        position: 'absolute',
        display: 'block',
        right: '4px',
        bottom: '10px',
        height: '8px',
        transition: transitions.create(),

        '> img': {
          display: 'block',
          maxHeight: '100%',
        },
      },

    },
  };
});
