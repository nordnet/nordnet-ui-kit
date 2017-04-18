import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default createStyleSheet('Thead', () => ({
  thead: {
    display: 'block',
    fontWeight: 'bold',
    borderColor: color.gray,
    ...styleUtils.sizes(),

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
}));
