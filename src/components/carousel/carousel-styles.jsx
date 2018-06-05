export default ({ palette, mixins }) => ({
  wrapper: {
    display: 'flex',
    minHeight: 100,
  },
  swipeContainer: {
    overflow: 'hidden',
    margin: 'auto',
    width: '100%',
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '20%',
      pointerEvents: 'none',
      background: 'linear-gradient(90deg, rgba(246,246,246,0) 20%, rgba(246,246,246,1) 100%)',
    },
  },
  slider: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
  swiping: {
    transform: 'transition(all, .35s, ease-in-out)',
  },
  buttonContainer: {
    display: 'flex',
    marginBottom: 20,
    alignItems: 'center',
  },
  scrollButton: {
    cursor: 'default',
    padding: 0,
    color: palette.text.secondary,
    display: 'none',
    [mixins.media('md')]: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
  },
  button: {
    cursor: 'pointer',
    color: palette.color.grayDarker,
    outline: 'none',
    background: 'transparent',
    width: 30,
    height: 30,
    border: 'none',
    margin: [0, 0, 0, 8],
    padding: 0,
    '&:hover': {
      backgroundColor: palette.color.grayLighter,
      borderRadius: '50%',
    },
  },
  invisible: {
    cursor: 'default',
    opacity: 0,
    cursorEvents: 'none',
  },
  arrowLeft: {
    transform: 'rotate(90deg)',
  },
  arrowRight: {
    transform: 'rotate(-90deg)',
  },
  '$arrowRight, $arrowLeft': {
    display: 'inherit',
  },
});
