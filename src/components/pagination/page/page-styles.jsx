const buttonSize = 45;
const buttonBorderSize = 2;

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
    display: 'block',
    color: palette.action.active,
    backgroundColor: palette.color.white,
    padding: 0,
    width: buttonSize,
    height: buttonSize,
    border: `${buttonBorderSize}px solid ${palette.action.disabled}`,
    borderRadius: '50%',
    textAlign: 'center',
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

    ...typography.primary(),
    lineHeight: `${buttonSize - buttonBorderSize * 2}px`,
  },
  buttonSelected: {
    background: palette.action.active,
    borderColor: palette.action.active,
    color: palette.color.white,
    cursor: 'inherit',
  },
});
