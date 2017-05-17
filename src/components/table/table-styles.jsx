import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from './style-utilities';

export default createStyleSheet('Table', theme => {
  const { palette, mixins } = theme;

  return {
    table: {
      ...mixins.basicBoxSizing,
      display: 'block',
      width: '100%',
      textAlign: 'left',
      borderCollapse: 'collapse',
      fontWeight: 'normal',
      position: 'relative',
      borderColor: palette.background.muted,
      ...styleUtils.sizes(),
    },
  };
});
