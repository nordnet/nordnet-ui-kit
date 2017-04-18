import { createStyleSheet } from 'jss-theme-reactor';
import c from 'color';

// TODO: Import the css from react-select somehow

export default createStyleSheet('Select', (theme) => {
  const { palette } = theme;

  const selectInputHeight = '28px';

  return {
    select: {
      '& .Select': {
        '&-control': {
          borderTop: 0,
          borderRight: 0,
          borderLeft: 0,
        },

        '&-multi-value-wrapper': {
          marginLeft: '-4px',
          paddingBottom: '2px',
        },

        '&-placeholder': {
          paddingLeft: 0,
          lineHeight: selectInputHeight,
        },

        '&-input': {
          height: selectInputHeight,
        },

        '&--multi': {
          '& .Select-input': {
            marginLeft: '4px',
          },

          '& .Select-value-icon': {
            border: 0,
            float: 'right',
            padding: '0 2px',
            margin: '5px',
            marginLeft: '3px',
            borderRadius: 0,
            background: palette.variant.primary,
            color: palette.shades.dark.text.default,
            lineHeight: 0.9,
            fontWeight: 'bold',

            '&:hover': {
              background: c(palette.variant.primary).darken(0.1).hex(),
              color: palette.shades.dark.text.default,
            },
          },
        },

        '&-menu-outer': {
          boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .1)',
          border: 0,
          borderTop: `.1rem solid ${palette.variant.primary}`,
        },

        '&-option': {
          borderBottom: `.1rem solid ${palette.background.muted}`,

          '&:last-child': {
            border: 0,
          },
        },
      },
    },

    label: {
      display: 'block',
      fontSize: '12px',
      color: palette.text.muted,
      marginBottom: '-1px',
      lineHeight: 1,
    },
  };
});
