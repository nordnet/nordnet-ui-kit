export default theme => {
  const { palette, mixins } = theme;

  return {
    alert: {
      ...mixins.basicBoxSizing,
      background: palette.gray7,
      padding: '4px 8px',
      position: 'relative',
      marginBottom: '16px',
      color: palette.gray0,
      ...theme.typography.tertiary(),
    },

    header: {
      display: 'inline-block',
      ...theme.typography.tertiary({
        weight: 'bold',
      }),
      padding: [4, 20, 4, 4],
      color: palette.complementaryBlue1,

      '&$vertical': {
        color: 'inherit',
      },
    },

    vertical: {
      display: 'block',
    },

    body: {
      display: 'inline-block',
      padding: [4, 20, 4, 4],
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
      borderLeft: `4px solid ${palette.complementaryBlue1}`,

      '& $header:not($vertical)': {
        color: palette.complementaryBlue1,
      },
    },

    success: {
      borderLeft: `4px solid ${palette.positive}`,

      '& $header:not($vertical)': {
        color: palette.positive,
      },
    },

    warning: {
      borderLeft: `4px solid ${palette.index}`,

      '& $header:not($vertical)': {
        color: palette.gray0,
      },
    },

    danger: {
      borderLeft: `4px solid ${palette.negative}`,

      '& $header:not($vertical)': {
        color: palette.negative,
      },
    },
  };
};
