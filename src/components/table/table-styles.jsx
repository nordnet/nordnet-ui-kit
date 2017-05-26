import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from './style-utilities';

export default createStyleSheet('Table', theme => {
  const { palette, mixins } = theme;

  return {
    root: {
      width: '100%',
      overflow: 'auto',
      position: 'relative',
    },
    table: {
      ...mixins.basicBoxSizing,
      display: 'block',
      textAlign: 'left',
      borderCollapse: 'collapse',
      fontWeight: 'normal',
      borderColor: palette.background.muted,
      ...styleUtils.sizes(),
    },
  };
});
