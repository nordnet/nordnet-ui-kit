import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Td', theme => {
  const { palette, typography, mixins } = theme;

  return {
    td: {
      ...mixins.basicBoxSizing,
      ...styleUtils.flexItem(),
      ...styleUtils.sizes(),
      ...styleUtils.modifiers(palette),
      ...styleUtils.highlights(palette),
      ...styleUtils.borders(palette),
      ...styleUtils.align(),
      ...styleUtils.ellipsis(),
      fontFamily: typography.primary.fontFamily,
      fontWeight: 'inherit',

      fontSize: 12,
      minWidth: 20,
      paddingTop: 8,
      paddingBottom: 8,

      [mixins.media('md')]: {
        fontSize: 14,
        minWidth: 40,
        paddingTop: 20,
        paddingBottom: 20,
      },
    },
  };
});
