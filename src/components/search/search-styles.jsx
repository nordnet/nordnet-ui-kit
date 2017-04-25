import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Search', (theme) => {
  const { palette, mixins } = theme;

  return {
    search: {
      ...mixins.basicBoxSizing,
      display: 'inline-block',
      position: 'relative',
      textAlign: 'left',
    },

    input: {
      padding: '6px 4px 6px 20px',
      appearance: 'none',
      border: 0,
      borderBottom: `.1rem solid ${palette.action.disabled}`,
      transition: 'border-color .15s linear',
      fontSize: 'inherit',
      lineHeight: 1.2,

      '&:focus': {
        outline: 0,
        borderColor: palette.variant.primary,

        // This rule makes it necessary for 'search__icon' to not be top level
        '& + .search__icon > svg g#search': {
          stroke: palette.variant.primary,
          transform: 'scale(1)',
        },

        // This rule makes it necessary for 'search__results' to not be top level
        '& ~ .search__results': {
          borderColor: palette.variant.primary,
        },
      },

      '& .search__icon': {
        display: 'block',
        position: 'absolute',
        width: '16px',
        height: '16px',
        top: '7px',
        left: 0,

        '& > svg': {
          width: '100%',
          height: '100%',

          '& g#search': {
            stroke: palette.text.muted,
            transition: 'stroke .15s linear, transform .15s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
            transform: 'scale(.85)',
            transformOrigin: '8px 8px',
          },
        },
      },

      '& .search__results': {
        display: 'block',
        position: 'absolute',
        overflow: 'hidden',
        maxWidth: 40,
        minWidth: 25,
        minHeight: '32px',
        top: '100%',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .1)',
        zIndex: 2,
        background: palette.background.default,
        borderTop: `1px solid ${palette.action.disabled}`,
        marginTop: '-1px',
        transition: 'border-color .15s linear',
        willChange: 'opacity',
      },
    },


    left: {
      left: 0,
    },

    right: {
      right: 0,
    },

    result: {
      display: 'block',
      fontSize: '14px',
      borderBottom: `1px solid ${palette.action.disabled}`,
      backgroundColor: palette.background.default,
      transition: 'background-color .15s linear',

      '& > a, & > span': {
        textDecoration: 'none',
        color: 'inherit',
        padding: '4px 8px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
      },

      '&:hover': {
        backgroundColor: palette.background.muted,
      },

      '&:last-child': {
        border: 0,
      },
    },

    isLoading: {
      textAlign: 'center',
      padding: '8px',
      fontSize: 0,
    },

    noResults: {
      textAlign: 'center',
      padding: '8px',
      lineHeight: 1.2,
      color: palette.text.muted,
    },

    info: {
      display: 'inline-block',
      flexGrow: 1,
    },

    development: {
      display: 'inline-block',
      flexGrow: 0,
      paddingLeft: 8,
      fontSize: 12,

      '&--positive': {
        color: palette.variant.success,
      },

      '&--negative': {
        color: palette.variant.danger,
      },
    },

    name: {
      fontWeight: 600,
      marginBottom: '4px',
      whiteSpace: 'nowrap',
    },

    market: {
      fontSize: '12px',
      color: palette.text.default,

      '& .flag': {
        marginRight: 5,
      },
    },
  };
});
