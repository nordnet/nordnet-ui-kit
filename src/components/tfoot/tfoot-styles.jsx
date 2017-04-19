import { createStyleSheet } from 'jss-theme-reactor';
import styleUtils from '../table/style-utilities';

export default createStyleSheet('Tfoot', () => ({
  tfoot: {
    display: 'block',
    ...styleUtils.sizes(),
  },
}));
