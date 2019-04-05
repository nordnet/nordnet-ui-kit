export default theme => {
  const { palette, typography } = theme;

  return {
    root: {
      borderRadius: 0,
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
      ...typography.tertiary({
        weight: 'bold',
      }),
      '&.primary': {
        textAlign: 'center',
        outline: 'none',
        borderTop: `2px solid ${palette.gray4}`,
        borderBottom: `2px solid ${palette.gray4}`,
        color: palette.gray0,
        backgroundColor: 'inherit',
        position: 'relative',

        '& + &': {
          borderLeft: `1px solid ${palette.gray4}`,
        },

        '& label': {
          cursor: 'pointer',
          margin: '0 12px',
          lineHeight: '28px',
        },
      },

      '&.secondary': {
        textAlign: 'center',
        outline: 'none',
        color: palette.gray0,
        backgroundColor: 'inherit',
        position: 'relative',

        '& selected': {
          backgroundColor: palette.gray6,
        },

        '& + &': {
          marginLeft: 27,
        },
      },
    },

    selected: {
      '&.primary': {
        backgroundColor: palette.cta,
        color: palette.white,
      },
      '&.secondary': {
        color: palette.gray0,
        paddingBottom: 2,
        borderBottom: `2px solid ${palette.cta}`,
      },
    },

    focus: {
      '&.primary': {
        boxShadow: `inset 0 0 1px 1px ${palette.cta}`,
      },
    },

    buttonLeft: {
      '&.primary': {
        borderRadius: 0,
        borderLeft: `2px solid ${palette.gray4}`,
      },
    },

    buttonRight: {
      '&.primary': {
        borderRadius: 0,
        borderRight: `2px solid ${palette.gray4}`,
      },
    },
  };
};
