import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Td', (theme) => {
  const { palette } = theme;

  return {
    td: {
      ...styleUtils.flexItem(),
      ...styleUtils.sizes(),
      ...styleUtils.mono(),
      ...styleUtils.modifiers(palette),
      ...styleUtils.highlights(palette),
      ...styleUtils.borders(palette),
      ...styleUtils.align(),
      ...styleUtils.ellipsis(),
      fontWeight: 'inherit',
    },
  };
});
