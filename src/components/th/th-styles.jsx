import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Th', (theme) => {
  const { palette, typography } = theme;

  return {
    th: {
      ...styleUtils.flexItem(),
      ...styleUtils.sizes(),
      ...styleUtils.modifiers(palette),
      ...styleUtils.highlights(palette),
      ...styleUtils.borders(palette),
      ...styleUtils.align(),
      ...styleUtils.ellipsis(),
      fontFamily: typography.primary.fontFamily,
      fontWeight: 500,
      paddingBottom: '10px',
      minWidth: '60px',
    },
  };
});
