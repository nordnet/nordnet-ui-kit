import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Alert', theme => {
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

      '& .alert-header': {
        display: 'inline-block',
        fontWeight: 'bold',
        padding: '4px',
        color: palette.variant.info,

        '&.vertical': {
          display: 'block',
          color: 'inherit',
        },
      },
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

    success: {
      borderLeft: `2px solid ${palette.variant.success}`,

      '& .alert-header': {
        color: palette.variant.success,
      },
    },

    warning: {
      borderLeft: `2px solid ${palette.variant.warning}`,

      '& .alert-header': {
        color: palette.variant.warning,
      },
    },

    danger: {
      borderLeft: `2px solid ${palette.variant.danger}`,

      '& .alert-header': {
        color: palette.variant.danger,
      },
    },
  };
});
