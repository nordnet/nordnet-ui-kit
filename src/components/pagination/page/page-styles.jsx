export default ({ palette, typography, mixins }) => ({
  item: {
    margin: [0, 5],
    display: 'none',
    alignItems: 'center',
    [mixins.media('md')]: {
      display: 'flex',
    },
  },
  itemAlwaysVisible: {
    display: 'flex',
  },
  button: {
    ...typography.primary,
    color: palette.action.active,
    fontSize: 16,
    padding: 0,
    width: 45,
    height: 45,
    lineHeight: 1,
    border: `2px solid ${palette.action.disabled}`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    outline: 'none',

    'a&': {
      textDecoration: 'none',
    },

    '&:hover': {
      background: palette.action.active,
      borderColor: palette.action.active,
      color: palette.color.white,
    },

    '&:focus': {
      borderColor: palette.action.active,
    },
  },
  buttonSelected: {
    background: palette.action.active,
    borderColor: palette.action.active,
    color: palette.color.white,
    cursor: 'inherit',
  },
});
