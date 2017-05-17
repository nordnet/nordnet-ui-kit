import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Dropdown', theme => {
  const { palette, mixins } = theme;

  return {
    dropdown: {
      ...mixins.basicBoxSizing,
      display: 'inline-block',
      position: 'relative',
      marginBottom: '16px',
    },

    toggle: {
      position: 'relative',
      background: 'none',
      border: 0,
      borderBottom: `1px solid ${palette.background.secondary}`,
      padding: '6px 0',
      zIndex: 4,
      fontSize: '14px',
      textAlign: 'left',
      color: palette.text.secondary,
      minWidth: '220px',
    },

    toggleIcon: {
      width: '10px',
      height: '8px',
      marginLeft: '8px',
    },

    actions: {
      position: 'absolute',
      top: 0,
      left: '16px',
      background: palette.background.default,
      boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .1)',
      listStyle: 'none',
      padding: '16px 16px 16px',
      marginTop: '38px',
      width: 'calc(100% + 16px)',
      zIndex: 5,

      '&:before': {
        position: 'absolute',
        left: '30%',
        transform: 'translateX(-50%)',
        display: 'block',
        content: '""', // Need the extra inner "", otherwise stripped away
        width: 0,
        height: 0,
        zIndex: 5,
        top: -8,
        borderLeft: '8px solid transparent',
        borderRight: '8px solid transparent',
        borderBottom: `8px solid ${palette.background.default}`,
      },
    },

    action: {
      display: 'block',
      padding: '8px 0',
      borderBottom: `1px solid ${palette.background.secondary}`,
      fontSize: '12px',
      color: palette.text.secondary,

      '&:last-child': {
        borderBottom: 'none',
      },
    },
  };
});
