import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('SegmentedControl', (theme) => {
  const { palette, typography } = theme;

  return {
    root: {
      marginRight: '6px',
      borderRadius: '8px',

      '& input': {
        display: 'none',
      },
    },

    label: {
      textAlign: 'center',
      outline: 'none',
      borderTop: `2px solid ${palette.color.grayLight}`,
      borderBottom: `2px solid ${palette.color.grayLight}`,
      fontSize: '12px',
      fontFamily: typography.primary.fontFamily,
      color: palette.text.default,
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '10px',
      paddingRight: '10px',
      backgroundColor: 'inherit',

      '& label': {
        cursor: 'pointer',
      },
    },

    selected: {
      backgroundColor: palette.color.grayLighter,
    },

    buttonLeft: {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
      borderLeft: `2px solid ${palette.color.grayLight}`,
      borderRight: `1px solid ${palette.color.grayLight}`,
    },

    buttonRight: {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
      borderLeft: `1px solid ${palette.color.grayLight}`,
      borderRight: `2px solid ${palette.color.grayLight}`,
    },
  };
});
