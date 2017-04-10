import { createStyleSheet } from 'jss-theme-reactor';
import Color from 'color';
import variables from '../../utilities/variables';

export default createStyleSheet('InputDefault', (theme) => {
  const { palette } = theme;

  const disabledColor = color => Color(color).mix(Color(palette.action.disabled), 0.6).hex();

  const modifierFunction = color => ({
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

  const modifierFocusFunction = color => ({
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
      fontSize: '1.6rem',
      color: palette.text.default,
      marginBottom: '1.6rem',
      position: 'relative',

      '&--has-success': modifierFunction(palette.variant.success),
      '&--has-warning': modifierFunction(palette.variant.warning),
      '&--has-error': modifierFunction(palette.variant.danger),

      '&--has-focus': {
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

        '& .input-has-success': modifierFocusFunction(palette.variant.success),
        '& .input-has-warning': modifierFocusFunction(palette.variant.warning),
        '& .input-has-error': modifierFocusFunction(palette.variant.danger),
      },

      '&--has-success .input__field': {
        paddingRight: '1.6rem',
      },

      '&--has-warning, &--has-error': {
        '& .input__field': {
          paddingRight: '0.8rem',
        },
      },

      '&--is-disabled': {
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

      '&--has-addon': {
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
        borderBottom: `0.1rem solid ${palette.action.disabled}`,
        paddingTop: '1.2rem',
        transition: `border-color .2s ${variables.easeOut}`,
      },

      '& .input__label': {
        position: 'absolute',
        top: '-0.4rem',
        left: 0,
        cursor: 'text',
        transition: `opacity .2s ${variables.easeOut}, transform .2s ${variables.easeOut}, color .2s ${variables.easeOut}`,
        fontSize: '1.2rem',
        transform: 'translateY(1.1rem)',
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
        padding: '0 0 0.5rem',
        width: '100%',
        transition: `border-color .2s ${variables.easeOut}, transform .2s ${variables.easeOut}`,
        fontSize: '1.6rem',
        transform: 'translateY(-0.4rem)',
        maxHeight: '2.7rem',
        fontFamily: 'inherit',
        fontWeight: 'inherit',

        '&.input--has-focus, &.input--has-value': {
          transform: 'translateY(0)',
        },

        '&:focus': {
          outline: 'none',
        },
      },

      '&--has-focus, &--has-value': {
        '& .input__element': {
          transform: 'translateY(0)',
        },
      },

      '& .input__validation-icon': {
        position: 'absolute',
        display: 'block',
        right: '0.4rem',
        bottom: '1rem',
        height: '0.8rem',
        transition: `all .2s ${variables.easeOut}`,

        '> img': {
          display: 'block',
          maxHeight: '100%',
        },
      },

    },
  };
});
