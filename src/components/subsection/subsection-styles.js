export default ({ palette, typography, mixins, transitions }) => ({
  root: {
    padding: [10, 0],
    borderBottom: `1px solid ${palette.color.grayLighter}`,
    width: '100%',
  },
  noSeparator: {
    borderBottom: 'none',
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  mainSection: {
    width: '100%',
  },
  title: {
    ...typography.secondary,
    fontSize: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: 1.4,
    padding: [8, 0],
    border: 'none',
    borderRadius: 0,
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: palette.text.default,
    width: '100%',
    textAlign: 'left',
    [mixins.media('md')]: {
      cursor: 'auto',
    },
  },
  loading: {
    cursor: 'auto',
  },
  titleLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleRight: {
    display: 'flex',
    alignItems: 'center',
  },
  chevron: {
    margin: [0, 4, 0, 10],
  },
  icon: {
    marginRight: 10,
  },
  desktopOnly: {
    [mixins.maxMedia('md')]: {
      display: 'none',
    },
  },
  mobileOnly: {
    [mixins.media('md')]: {
      display: 'none',
    },
  },
  children: {
    maxHeight: 0,
    overflow: 'hidden',
    transition: transitions.create(['max-height'], { duration: transitions.duration.shorter }),

    [mixins.media('md')]: {
      maxHeight: 'initial',
      overflow: 'visible',
    },
  },
  toggled: {
    maxHeight: 'initial',
    overflow: 'visible',
  },
});
