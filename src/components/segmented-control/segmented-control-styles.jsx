export default theme => {
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
        cursor: 'pointer',
      },
    },

    radio: {
      '& label': {
        '& svg': {
          paddingTop: '8px',
        },

        display: 'block',
      },
    },

    label: {
      '&.primary': {
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

      '&.secondary': {
        letterSpacing: 0.2,
        textAlign: 'center',
        outline: 'none',
        fontSize: '12px',
        fontFamily: typography.primary.fontFamily,
        fontWeight: typography.fontWeightSemiBold,
        color: palette.color.grayDark,
        backgroundColor: 'inherit',
        position: 'relative',

        '& selected': {
          backgroundColor: palette.color.grayLighter,
        },

        '& + &': {
          marginLeft: 27,
        },
      },
    },

    selected: {
      '&.primary': {
        backgroundColor: palette.color.grayLighter,
      },
      '&.secondary': {
        color: palette.text.default,
        paddingBottom: 2,
        borderBottom: `2px solid ${palette.accent}`,
      },
    },

    focus: {
      '&.primary': {
        boxShadow: `inset 0 0 1px 1px ${palette.variant.primary}`,
      },
    },

    buttonLeft: {
      '&.primary': {
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        borderLeft: `2px solid ${palette.color.grayLight}`,
      },
    },

    buttonRight: {
      '&.primary': {
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
        borderRight: `2px solid ${palette.color.grayLight}`,
      },
    },
  };
};
