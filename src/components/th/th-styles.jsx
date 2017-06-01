import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Th', theme => {
  const { palette, typography, mixins } = theme;

  return {
    th: {
      ...mixins.basicBoxSizing,
      ...styleUtils.flexItem(),
      ...styleUtils.sizes(),
      ...styleUtils.modifiers(palette),
      ...styleUtils.highlights(palette),
      ...styleUtils.borders(palette),
      ...styleUtils.align(),
      ...styleUtils.ellipsis(),
      fontFamily: typography.primary.fontFamily,
      fontWeight: typography.fontWeightSemiBold,

      minWidth: 20,
      paddingBottom: 4,

      [mixins.media('sm')]: {
        minWidth: 40,
        paddingBottom: 10,
      },
    },
  };
});
