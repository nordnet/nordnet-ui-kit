import { createStyleSheet } from '@iamstarkov/jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Tfoot', theme => {
  const { palette, mixins, typography } = theme;

  return {
    tfoot: {
      ...mixins.basicBoxSizing,
      display: 'block',
      fontWeight: typography.fontWeightSemiBold,
      ...styleUtils.sizes(),
      borderTop: `2px solid ${palette.shades.dark.text.muted}`,
    },
  };
});
