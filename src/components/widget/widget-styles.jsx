import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Widget', (theme) => {
  const { palette } = theme;

  return {
    widget: {
      display: 'block',
      background: palette.background.default,
      boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .1)',
      marginBottom: '16px',
    },

    heading: {
      display: 'inline-block',
      margin: 0,
      padding: '12px 16px',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: 1.2,
      verticalAlign: 'top',
    },

    body: {
      padding: '0 16px 16px',
    },

    noHeader: {
      paddingTop: '16px',
    },

    fullWidth: {
      padding: 0,
    },
  };
});
