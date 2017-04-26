import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Pane', (theme) => {
  const { palette, mixins, typography } = theme;

  return {
    pane: {
      ...mixins.basicBoxSizing,
      background: palette.background.default,
      boxShadow: '0 2px 4px 2px rgba(0, 0, 0, 0.1)',
      fontFamily: typography.primary.fontFamily,
      marginBottom: 16,
    },

    tabs: {
      display: 'block',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      color: palette.text.muted,
      borderBottom: `1px solid ${palette.background.secondary}`,
    },

    tab: {
      display: 'inline-block',
      background: palette.background.default,
      lineHeight: 1.2,
      textAlign: 'center',
      cursor: 'pointer',
      letterSpacing: 1,
    },

    xs: {
      fontSize: 10,
      padding: 4,
      borderBottom: '4px solid transparent',
    },

    sm: {
      fontSize: 12,
      padding: 6,
      borderBottom: '6px solid transparent',
    },

    md: {
      fontSize: 14,
      padding: 8,
      borderBottom: '8px solid transparent',
    },

    lg: {
      fontSize: 16,
      padding: 10,
      borderBottom: '10px solid transparent',
    },

    active: {
      background: palette.background.default,
      color: palette.text.default,
      fontWeight: 600,
      borderColor: palette.background.secondary,
    },

  };
});
