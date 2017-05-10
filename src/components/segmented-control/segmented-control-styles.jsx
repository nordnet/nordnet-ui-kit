import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('SegmentedControl', (theme) => {
  const { palette, typography } = theme;

  return {
    root: {
      marginRight: '6px',
      borderRadius: '8px',
      display: 'inline-flex',

      '& input': {
        opacity: 0,
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '100%',
        margin: 0,
      },
    },

    radio: {
      '& label': {
        paddingTop: '8px',
        display: 'block',
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
      backgroundColor: 'inherit',
      position: 'relative',

      '& + &': {
        borderLeft: `1px solid ${palette.color.grayLight}`,
      },

      '& label': {
        cursor: 'pointer',
        margin: '0 12px',
        lineHeight: '28px',
      },
    },

    selected: {
      backgroundColor: palette.color.grayLighter,
    },

    focus: {
      boxShadow: `inset 0 0 1px 1px ${palette.variant.primary}`,
    },

    buttonLeft: {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
      borderLeft: `2px solid ${palette.color.grayLight}`,
    },

    buttonRight: {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
      borderRight: `2px solid ${palette.color.grayLight}`,
    },
  };
});
