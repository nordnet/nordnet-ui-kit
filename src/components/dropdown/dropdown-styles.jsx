import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Dropdown', (theme) => {
  const { palette } = theme;

  return {
    dropdown: {
      display: 'inline-block',
      position: 'relative',
      marginBottom: '16px',
    },

    toggle: {
      position: 'relative',
      background: 'none',
      border: 0,
      borderBottom: '1px solid #C5C5C5',
      padding: '6px 0',
      zIndex: 4,
      fontWeight: 600,
      fontSize: '14px',
    },

    toggleIcon: {
      width: '10px',
      height: '8px',
      marginLeft: '8px',
    },

    actions: {
      position: 'absolute',
      top: 0,
      left: '-16px',
      background: palette.background.default,
      boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .1)',
      listStyle: 'none',
      padding: '32px 16px 16px',
      margin: 0,
      width: 'calc(100% + 32px)',
      zIndex: 3,
    },

    action: {
      display: 'block',
      padding: '4px 0',
      borderBottom: '1px solid #C5C5C5',
      fontSize: '12px',
    },
  };
});
