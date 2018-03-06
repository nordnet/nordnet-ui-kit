export default ({ palette, typography, mixins }) => ({
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
  desktop: {
    display: 'none',
    [mixins.media('md')]: {
      display: 'block',
    },
  },
  mobile: {
    [mixins.media('md')]: {
      display: 'none',
    },
  },
});
