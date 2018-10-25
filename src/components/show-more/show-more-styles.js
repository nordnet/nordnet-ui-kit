export default () => ({
  text: {
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      width: '100%',
      height: 40,
      position: 'absolute',
      left: 0,
      bottom: 0,
      background: 'linear-gradient(transparent, white)',
    },
    margin: 0,
  },
  disableOverlay: {
    '&::before': {
      display: 'none',
    },
  },
  textShowAll: {
    overflow: 'visible',
    marginBottom: '1em',
    position: 'static',
  },
  button: {
    marginLeft: 0,
    borderLeft: 'none',
  },
});
