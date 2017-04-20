import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Alert', (theme) => {
  const { palette } = theme;

  return {
    alert: {
      background: palette.background.default,
      fontSize: '12px',
      padding: '4px 8px',
      position: 'relative',
      lineHeight: 1.4,
      marginBottom: '16px',

      '& .header': {
        display: 'inline-block',
        fontWeight: 'bold',
        padding: '4px',
        color: palette.variant.info,
      },
    },

    body: {
      display: 'inline-block',
      padding: '4px',
    },

    close: {
      all: 'initial',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      padding: '12px',
      cursor: 'pointer',
    },

    success: {
      borderLeft: `2px solid ${palette.variant.success}`,

      '& .header': {
        color: palette.variant.success,
      },
    },

    warning: {
      borderLeft: `2px solid ${palette.variant.warning}`,

      '& .header': {
        color: palette.variant.warning,
      },
    },

    danger: {
      borderLeft: `2px solid ${palette.variant.danger}`,

      '& .header': {
        color: palette.variant.danger,
      },
    },
  };
});
