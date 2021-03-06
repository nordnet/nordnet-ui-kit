export default ({ palette, typography, mixins, transitions }) => ({
  root: {
    padding: [10, 0],
    borderBottom: `1px solid ${palette.gray6}`,
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
    alignItems: 'center',
    padding: [8, 0],
    border: 'none',
    borderRadius: 0,
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: palette.white,
    color: palette.gray0,
    width: '100%',
    textAlign: 'left',

    [mixins.media('md')]: {
      cursor: 'auto',
    },

    ...typography.title3(),
  },
  titleContent: {
    display: 'flex',
    justifyContent: 'space-between',
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
      maxHeight: 'none',
      overflow: 'visible',
    },
  },
  toggled: {
    maxHeight: 'none',
    overflow: 'visible',
  },
});
