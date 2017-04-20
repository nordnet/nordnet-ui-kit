import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Tbody', (theme) => {
  const { palette } = theme;
  return {
    tbody: {
      display: 'block',
      ...styleUtils.sizes(),
      ...styleUtils.borders(palette),

      '&.alternate-rows': {
        '& tr:nth-child(odd)': {
          background: palette.background.muted,
        },
      },

      '&.scroll': {
        width: '100%',
        overflowY: 'scroll',
      },
    },
  };
});
