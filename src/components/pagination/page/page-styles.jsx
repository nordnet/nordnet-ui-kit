const buttonSize = 45;
const buttonBorderSize = 1;

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
    color: palette.gray0,
    backgroundColor: palette.white,
    padding: 0,
    width: buttonSize,
    height: buttonSize,
    border: `${buttonBorderSize}px solid ${palette.gray4}`,
    borderRadius: '50%',
    textAlign: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    outline: 'none',

    'a&': {
      textDecoration: 'none',
    },

    '&:hover': {
      background: palette.cta,
      borderColor: palette.cta,
      color: palette.white,
    },

    '&:focus': {
      borderColor: palette.cta,
    },

    ...typography.primary(),
    lineHeight: `${buttonSize - buttonBorderSize * 2}px`,
  },
  buttonSelected: {
    background: palette.cta,
    borderColor: palette.cta,
    color: palette.white,
    cursor: 'inherit',
    fontWeight: typography.primary({ weight: 'bold' }).fontWeight,
  },
});
