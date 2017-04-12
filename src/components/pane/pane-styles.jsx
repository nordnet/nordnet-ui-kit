import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Pane', (theme) => {
  const { palette } = theme;

  return {
    pane: {
      background: palette.background.default,
      boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .1)',
      marginBottom: '16px',

      '& .tabs': {
        display: 'block',
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },

      '& .tab': {
        display: 'inline-block',
        background: '#F3F4F5',
        borderRight: '.1rem solid #C5C5C5',
        lineHeight: 1.2,
        padding: '8px',
        textAlign: 'center',
        cursor: 'pointer',

        '&:last-child': {
          border: 0,
        },
      },

      '& .active': {
        background: palette.background.default,
        color: palette.variant.primary,
        fontWeight: 600,
      },
    },
  };
});
