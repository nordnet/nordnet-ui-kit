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
    border: `2px solid ${palette.action.disabled}`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: 'transparent',
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
