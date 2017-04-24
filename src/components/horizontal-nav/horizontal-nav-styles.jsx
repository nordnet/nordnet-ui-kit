import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('HorizontalNav', (theme) => {
  const { palette, mixins } = theme;

  return {
    horizontalNav: {
      ...mixins.basicBoxSizing,
      position: 'relative',
    },

    items: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      overflowX: 'scroll',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
      paddingRight: '4.8rem',
    },

    item: {
      display: 'inline-block',
      padding: '1.6rem',
      marginRight: '.4rem',
      lineHeight: 1,
      cursor: 'pointer',
    },

    active: {
      color: palette.variant.primary,
    },

    hasLink: {
      padding: 0,

      '& a': {
        display: 'block',
        padding: '1.6rem',
        color: 'inherit',
        textDecoration: 'none',
      },
    },

    fade: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '4.8rem',
      height: '100%',
      maxWidth: '25%',
    },
  };
});
