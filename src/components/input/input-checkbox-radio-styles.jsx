import { createStyleSheet } from 'jss-theme-reactor';
import variables from '../../utilities/variables';

export default createStyleSheet('InputCheckboxRadio', (theme) => {
  const { palette } = theme;

  const modifierFn = color => ({
    color,

    '& .checkbox, & .radio': {
      borderColor: color,

      '&--is-checked': {
        backgroundColor: color,
      },
    },

    '& .input-checkbox-radio__element > input:focus': {
      '& + .checkbox, & + .radio': {
        '&::before': {
          borderColor: color,
        },
      },
    },
  });

  return {
    'input-checkbox-radio': {
      display: 'block',
      marginBottom: '16px',

      '& .input-checkbox-radio__element': {
        display: 'inline-block',
        width: '16px',
        position: 'relative',

        '& input': {
          position: 'absolute',
          opacity: 0,

          '&:focus': {
            '& + .checkbox, & + .radio': {
              '&::before': {
                position: 'absolute',
                display: 'block',
                width: 'calc(100% + 8px)',
                height: 'calc(100% + 8px)',
                top: '-4px',
                left: '-4px',
                content: '',
                borderRadius: 'inherit',
                border: `2px solid ${palette.variant.info}`,
              },
            },
          },
        },
      },

      '&.input-checkbox-radio--has-success': modifierFn(palette.variant.success),
      '&.input-checkbox-radio--has-warning': modifierFn(palette.variant.warning),
      '&.input-checkbox-radio--has-error': modifierFn(palette.variant.danger),

      '& .input-checkbox-radio__label': {
        display: 'inline-block',
        lineHeight: 1.2,
        verticalAlign: 'top',
        paddingLeft: '4px',
        userSelect: 'none',
        maxWidth: 'calc(100% - 16px)',
        fontSize: '16px',
        marginTop: '-2px',
      },

      '&.input-checkbox-radio--is-disabled': {
        cursor: 'not-allowed',
        color: palette.action.disabled,
      },

      '& + .help-text': {
        position: 'relative',
        textAlign: 'left',
        width: 'auto',
        bottom: '14px',
        marginLeft: '20px',
      },

      '& .checkbox, & .radio': {
        position: 'relative',
        display: 'block',
        width: '16px',
        height: '16px',
        border: `1px solid ${palette.action.disabled}`,
        padding: '3px 2px',
        transition: `all .1s ${variables.easeOut}`,
        userSelect: 'none',
        color: palette.text.default,
        outlineColor: palette.background.default,

        '&--is-checked': {
          color: palette.text.default,
          borderColor: palette.text.default,
          background: palette.text.default,
        },

        '&--is-disabled': {
          color: palette.action.disabled,
          borderColor: palette.action.disabled,
        },
      },

      '& .checkbox .icon > svg': {
        display: 'block',
      },

      '& .checkbox--is-disabled.checkbox--is-checked, & .radio--is-disabled.radio--is-checked': {
        background: palette.action.disabled,
      },

      '& .radio': {
        borderRadius: '50%',

        '&--is-checked::after': {
          content: '',
          position: 'absolute',
          display: 'block',
          width: '8px',
          height: '8px',
          background: palette.background.default,
          top: '3px',
          left: '3px',
          borderRadius: '50%',
        },
      },
    },
  };
});
