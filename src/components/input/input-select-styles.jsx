import { createStyleSheet } from 'jss-theme-reactor';
import variables from '../../utilities/variables';

export default createStyleSheet('InputSelect', (theme) => {
  const { palette } = theme;

  return {
    'select-wrapper': {
      position: 'relative',

      '& .input': {
        '&__element': {
          appearance: 'none',
          opacity: 0,
          paddingRight: '2.4rem',
        },

        '&__placeholder, &__value-label': {
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '1.2em',
          overflow: 'hidden',
          paddingRight: '2.4rem',
          pointerEvents: 'none',
        },

        '&__placeholder': {
          top: '0.4rem',
          color: palette.text.muted,
        },

        '&__value-label': {
          top: 0,
          textOverflow: 'ellipsis',
        },

        '&__select-arrow': {
          position: 'absolute',
          display: 'block',
          right: '0.4rem',
          bottom: '1rem',
          height: '0.8rem',
          transition: `transform .2s ${variables.easeOut}`,
          transform: 'translateY(-0.4rem)',
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
        '.input__element, .input__placeholder': {
          cursor: 'not-allowed',
        },
      },
    },
  };
});
