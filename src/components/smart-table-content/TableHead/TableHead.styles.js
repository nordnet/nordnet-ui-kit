export default ({ typography, palette, mixins }) => ({
  root: {
    [mixins.maxMedia('md')]: {
      display: 'none',
    },
  },
  button: {
    position: 'relative',
    fontFamily: typography.primary.fontFamily,
    border: 'none',
    background: 'none',
    fontSize: 12,
    fontWeight: 'inherit',
    padding: 0,
    cursor: 'pointer',
    outline: 'none',
    '&:hover $icon, &:focus $icon': {
      opacity: 1,
    },
    '&:focus::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 2,
      background: palette.action.active,
    },
  },
  icon: {
    margin: [0, '1ch'],
    opacity: 0,
  },
  columnHeaderInner: {
    display: 'block',
    padding: [10, 4],
    fontWeight: typography.fontWeightRegular,
  },
  columnHeaderSorted: {
    '& $icon': {
      opacity: 1,
      display: 'inline-block',
    },
    fontWeight: typography.fontWeightSemiBold,
  },
  screenReadersOnly: mixins.screenReadersOnly,
});
