import { createStyleSheet } from 'jss-theme-reactor';

export default createStyleSheet('Legend', (theme) => {
  const { palette } = theme;

  return {
    legend: {
      width: '100%',
      fontSize: '1.4rem',
      color: palette.text.muted,

      '& .items': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        marginBottom: '-8px',
      },

      '& .item': {
        display: 'inline-block',
        paddingBottom: '8px',
      },

      '& .indicator': {
        display: 'inline-block',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        margin: '0 4px 1px 0',
      },

      '& .value': {
        fontSize: '12px',
        marginLeft: '8px',
      },
    },
  };
});
