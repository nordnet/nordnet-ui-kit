export default theme => {
  const { palette, mixins } = theme;

  return {
    alert: {
      ...mixins.basicBoxSizing,
      background: palette.background.default,
      fontSize: '12px',
      padding: '4px 8px',
      position: 'relative',
      lineHeight: 1.4,
      marginBottom: '16px',
      color: palette.text.default,
    },

    header: {
      display: 'inline-block',
      fontWeight: 'bold',
      padding: '4px',
      color: palette.variant.info,

      '&$vertical': {
        color: 'inherit',
      },
    },

    vertical: {
      display: 'block',
    },

    body: {
      display: 'inline-block',
      padding: '4px',
    },

    close: {
      all: 'initial',
      background: 'none repeat scroll 0 0 transparent',
      border: 'none',
      borderSpacing: 0,
      listStyle: 'none',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      padding: '12px',
      cursor: 'pointer',
    },

    info: {
      borderLeft: `4px solid ${palette.variant.info}`,

      '& $header:not($vertical)': {
        color: palette.variant.info,
      },
    },

    success: {
      borderLeft: `4px solid ${palette.variant.success}`,

      '& $header:not($vertical)': {
        color: palette.variant.success,
      },
    },

    warning: {
      borderLeft: `4px solid ${palette.variant.warning}`,

      '& $header:not($vertical)': {
        color: palette.variant.warning,
      },
    },

    danger: {
      borderLeft: `4px solid ${palette.variant.danger}`,

      '& $header:not($vertical)': {
        color: palette.variant.danger,
      },
    },
  };
};
