export default ({ typography, palette }) => ({
  list: {
    background: palette.white,
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    display: 'flex',
  },

  tertiary: {
    ...typography.secondary({ weight: 'bold' }),
    borderBottom: `2px solid ${palette.gray6}`,
  },
});
