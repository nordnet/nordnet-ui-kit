export default theme => {
  const { palette, mixins, typography } = theme;

  return {
    pane: {
      ...mixins.basicBoxSizing,
      background: palette.background.default,
      ...typography.primary(),
    },

    tabs: {
      display: 'flex',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      color: palette.text.muted,
      borderBottom: `1px solid ${palette.background.secondary}`,
    },

    tab: {
      display: 'inline-block',
      background: palette.background.default,
      textAlign: 'center',
      cursor: 'pointer',
      letterSpacing: 1,
      flexGrow: 1,
    },

    xs: {
      padding: 4,
      borderBottom: '4px solid transparent',
      ...typography.caption(),
    },

    sm: {
      padding: 6,
      borderBottom: '6px solid transparent',
      ...typography.tertiary(),
    },

    md: {
      padding: 8,
      borderBottom: '8px solid transparent',
      ...typography.secondary(),
    },

    lg: {
      padding: 10,
      borderBottom: '10px solid transparent',
      ...typography.primary(),
    },

    active: {
      background: palette.background.default,
      color: palette.text.default,
      fontWeight: typography.primary({ weight: 'bold' }).fontWeight,
      borderColor: palette.background.secondary,
    },
  };
};
