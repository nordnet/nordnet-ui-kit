export default theme => {
  const { palette, transitions, mixins } = theme;

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
          boxSizing: 'border-box',
        },
      },
    },
  });

  return {
    'input-checkbox-radio': {
      ...mixins.basicBoxSizing,
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
                content: '""',
                display: 'block',
                width: 'calc(100% + 8px)',
                height: 'calc(100% + 8px)',
                top: '-4px',
                left: '-4px',
                borderRadius: 'inherit',
                border: `2px solid ${palette.cta}`,
                boxSizing: 'border-box',
              },
            },
          },
        },
      },

      '&.input-checkbox-radio--has-success': modifierFn(palette.positive),
      '&.input-checkbox-radio--has-warning': modifierFn(palette.index),
      '&.input-checkbox-radio--has-error': modifierFn(palette.negative),

      '& .input-checkbox-radio__label': {
        display: 'inline-block',
        verticalAlign: 'top',
        paddingLeft: '4px',
        userSelect: 'none',
        maxWidth: 'calc(100% - 16px)',
        marginTop: '-2px',
        ...theme.typography.primary(),
      },

      '&.input-checkbox-radio--is-disabled': {
        cursor: 'not-allowed',
        color: palette.gray4,
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
        border: `1px solid ${palette.gray0}`,
        padding: '3px 2px',
        transition: transitions.create(['all'], {
          duration: transitions.duration.shortest,
        }),
        userSelect: 'none',
        color: palette.gray0,
        outlineColor: palette.gray7,

        '&--is-checked': {
          color: palette.cta,
          borderColor: palette.cta,
          background: palette.cta,
        },

        '&--is-disabled': {
          color: palette.gray4,
          borderColor: palette.gray4,
        },
      },

      '& .checkbox': {
        '&--is-disabled': {
          background: palette.gray4,
        },
      },

      '& .checkbox .icon > svg': {
        display: 'block',
      },

      '& .checkbox--is-disabled.checkbox--is-checked, & .radio--is-disabled.radio--is-checked': {
        background: palette.gray4,
      },

      '& .radio': {
        borderRadius: '50%',

        '&--is-checked::after': {
          content: '""',
          position: 'absolute',
          display: 'block',
          width: '8px',
          height: '8px',
          background: palette.gray7,
          top: '3px',
          left: '3px',
          borderRadius: '50%',
        },
      },
    },
  };
};
