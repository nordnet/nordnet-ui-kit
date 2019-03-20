export default ({ palette }) => ({
  list: {
    background: palette.white,
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    display: 'flex',
  },

  tertiary: {
    borderBottom: `2px solid ${palette.gray6}`,
  },
});
