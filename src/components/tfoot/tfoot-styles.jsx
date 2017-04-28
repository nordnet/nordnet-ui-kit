import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Tfoot', (theme) => {
  const { palette, mixins } = theme;

  return {
    tfoot: {
      ...mixins.basicBoxSizing,
      display: 'block',
      ...styleUtils.sizes(),
      borderTop: `2px solid ${palette.shades.dark.text.muted}`,
      paddingTop: '20px',
      paddingBottom: '10px',
      letterSpacing: '1px',
    },
  };
});
