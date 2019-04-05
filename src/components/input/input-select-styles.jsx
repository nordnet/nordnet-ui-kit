import defaultStylesFn from './input-default-styles';

export default theme => {
  const { palette, transitions, mixins } = theme;
  const defaultStyles = defaultStylesFn(theme);

  const borderSize = 1;

  return {
    input: {
      ...defaultStyles.input,
    },
    selectable: {}, // needed for placeholder further down
    'select-wrapper': {
      ...mixins.basicBoxSizing,
      position: 'relative',

      '& .input__element': {
        appearance: 'none',
        opacity: 0,
        paddingRight: 24,
      },

      '& .input__placeholder': {
        lineHeight: '1.5em', // since input-default has height 1.5em
      },
      '& .input__placeholder, & .input__value-label': {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        overflow: 'hidden',
        paddingRight: 24,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },

      '& .input__placeholder:not($selectable)': {
        color: palette.gray0,
      },

      '& .input__select-arrow': {
        position: 'absolute',
        display: 'block',
        right: '4px',
        top: '6px',
        height: '8px',
        transition: transitions.create(['transform']),
        transform: 'translateY(-4px)',
        pointerEvents: 'none',
      },

      '&.input--has-focus, &.input--has-value': {
        '.input__select-arrow': {
          transform: 'translateY(0)',
        },

        '.input__placeholder': {
          display: 'none',
        },
      },

      '&.input--is-disabled': {
        '& .input__element, & .input__placeholder': {
          cursor: 'not-allowed',
        },
      },
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
