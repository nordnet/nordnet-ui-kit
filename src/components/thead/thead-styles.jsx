import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default createStyleSheet('Thead', theme => {
  const { palette, mixins } = theme;

  return {
    thead: {
      ...mixins.basicBoxSizing,
      display: 'block',
      fontWeight: 'bold',
      borderColor: color.gray,
      borderBottom: `2px solid ${palette.shades.dark.text.muted}`,
      paddingBottom: '10px',
      letterSpacing: '1px',
      fontSize: '12px',
      ...styleUtils.sizes(),
      width: '100%',

      '&.primary': {
        background: color.gray,
        borderColor: color.grayDark,
      },

      '&.secondary': {
        background: color.grayDarker,
        borderColor: color.black,
        color: color.white,
      },
    },
  };
});
