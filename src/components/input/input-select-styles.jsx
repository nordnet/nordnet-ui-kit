import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('InputSelect', (theme) => {
  const { palette, transitions, mixins } = theme;

  return {
    'select-wrapper': {
      ...mixins.basicBoxSizing,
      position: 'relative',

      '& .input': {
        '&__element': {
          appearance: 'none',
          opacity: 0,
          paddingRight: '24px',
        },

        '&__placeholder, &__value-label': {
          position: 'absolute',
          left: 0,
          width: '100%',
          overflow: 'hidden',
          paddingRight: '24pxm',
          pointerEvents: 'none',
        },

        '&__placeholder': {
          top: 0,
          color: palette.text.muted,
        },

        '&__value-label': {
          top: 0,
          textOverflow: 'ellipsis',
        },

        '&__select-arrow': {
          position: 'absolute',
          display: 'block',
          right: '4px',
          top: '6px',
          height: '8px',
          transition: transitions.create(['transform']),
          transform: 'translateY(-4px)',
          pointerEvents: 'none',

          '> img': {
            display: 'block',
            maxHeight: '100%',
          },

          '& svg': {
            display: 'block',
          },
        },
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
  };
});
