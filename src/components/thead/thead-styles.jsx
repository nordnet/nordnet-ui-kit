import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default createStyleSheet('Thead', theme => {
  const { palette, mixins, typography } = theme;

  return {
    thead: {
      ...mixins.basicBoxSizing,
      display: 'block',
      fontWeight: typography.fontWeightSemiBold,
      borderColor: color.gray,
      borderBottom: `2px solid ${palette.shades.dark.text.muted}`,
      ...styleUtils.sizes(),
      width: '100%',
      fontSize: 12,

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
