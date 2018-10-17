export default ({ palette }) => ({
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    display: 'flex',
  },

  tertiary: {
    borderBottom: `2px solid ${palette.color.grayLighter}`,
    flex: '0 0 auto',
    justifyContent: 'center',
  },
});
