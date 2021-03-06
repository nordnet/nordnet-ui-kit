export default ({ typography }) => ({
  text: {
    ...typography.primary(),
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      width: '100%',
      height: 40,
      position: 'absolute',
      left: 0,
      bottom: 0,
      background: ({ backgroundColor }) =>
        `linear-gradient(rgba(255,255,255,0), ${backgroundColor})`,
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
