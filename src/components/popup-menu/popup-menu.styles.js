const triangleIndent = 15;
export default ({ palette, typography, mixins, transitions }) => ({
  menuPopup: {
    position: 'absolute',
    display: 'inline-block',
    top: '100%',
    right: '50%',
    background: palette.white,
    boxShadow: '0 2px 4px 2px rgba(0, 0, 0, .1)',
    listStyle: 'none',
    padding: 15,
    marginTop: 10,
    overflow: 'hidden',
    zIndex: 1,
    transform: `translateX(${triangleIndent + 20 / 2}px)`, // 20 = triangle width

    '&::before': {
      position: 'absolute',
      right: triangleIndent,
      transform: 'translateX(-3px) rotate(45deg)',
      boxShadow: '-1px -1px 1px rgba(0, 0, 0, .08)',
      display: 'block',
      content: '""', // Need the extra inner "", otherwise stripped away
      width: 0,
      height: 0,
      zIndex: 5,
      top: -7,
      borderLeft: `7px solid ${palette.white}`,
      borderRight: `7px solid ${palette.white}`,
      borderBottom: `7px solid ${palette.white}`,
      borderTop: `7px solid ${palette.white}`,
    },
  },
  menuContainer: {
    position: 'relative',
    display: 'flex',
  },
  menuItemContainer: {
    display: 'block',
    borderBottom: `1px solid ${palette.gray5}`,
    color: palette.gray0,

    '&:last-child': {
      borderBottom: 'none',
    },

    ...typography.tertiary(),
  },
  menuButton: {
    color: palette.gray0,
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
  menuSlideDown: {
    '&-enter': {
      opacity: 0.01,
      transform: 'translate(0, -5px)',

      '&-active': {
        opacity: 1,
        transform: 'translate(0, 0)',
        transitionProperty: transitions.create(['opacity', 'transform']),
        transition: 'opacity 300ms ease-in',
      },
    },
    '&-exit': {
      opacity: 1,

      '&-active': {
        opacity: 0.01,
        transitionProperty: transitions.create(['opacity']),
        transition: 'opacity 300ms ease-in',
      },
    },
  },
  menuItems: {
    listStyle: 'none',
    color: palette.gray0,
    padding: 0,
    margin: 0,
  },
  item: {
    textDecoration: 'none',
    ...typography.secondary(),
  },
  link: {
    ...mixins.basicBoxSizing,
    display: 'block',
    padding: 10,
    width: '100%',

    '&:hover:not([disabled])': {
      background: palette.gray7,
    },

    '&:focus:not([disabled])': {
      background: palette.gray6,
    },

    '&[disabled]': {
      color: palette.gray0,
      cursor: 'default',
      pointerEvents: 'none',
    },

    color: palette.gray0,
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    textAlign: 'left',
    ...typography.secondary(),
  },
});
