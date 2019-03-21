export default theme => {
  const { palette, mixins, typography } = theme;

  return {
    pane: {
      ...mixins.basicBoxSizing,
      background: palette.white,
      ...typography.primary(),
    },

    tabs: {
      display: 'flex',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      color: palette.gray0,
      borderBottom: `1px solid ${palette.gray6}`,
    },

    tab: {
      display: 'inline-block',
      textAlign: 'center',
      cursor: 'pointer',
      letterSpacing: 1,
      flexGrow: 1,
    },

    xs: {
      padding: 4,
      borderBottom: '2px solid transparent',
      ...typography.tertiary(),
    },

    sm: {
      padding: 6,
      borderBottom: '2px solid transparent',
      ...typography.tertiary(),
    },

    md: {
      padding: 8,
      borderBottom: '2px solid transparent',
      ...typography.secondary(),
    },

    lg: {
      padding: 10,
      borderBottom: '2px solid transparent',
      ...typography.primary(),
    },

    active: {
      color: palette.gray0,
      fontWeight: typography.primary({ weight: 'bold' }).fontWeight,
      borderColor: palette.cta,
    },
  };
};
