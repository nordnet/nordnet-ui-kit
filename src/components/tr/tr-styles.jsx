import { createStyleSheet } from '@iamstarkov/jss-theme-reactor';
import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default createStyleSheet('Tr', theme => {
  const { palette, mixins } = theme;

  return {
    tr: {
      ...mixins.basicBoxSizing,
      ...styleUtils.flexRow(),
      ...styleUtils.sizes(),
      alignItems: 'center',
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent',

      '&.primary': {
        background: `${color.grayLight} !important`,
        borderColor: color.gray,
      },

      '&.secondary': {
        background: `${color.grayDark} !important`,
        borderColor: color.grayDarker,
        color: color.white,
      },

      '&.clone': {
        opacity: 0,
      },

      '&.sticky': {
        position: 'absolute',
        background: palette.background.default,
      },

      [mixins.media('md')]: {
        '&.sticky': {
          position: 'fixed',
        },

        '& + .tr--clone': {
          display: 'flex',
        },
      },

      '&.border': {
        border: '1px solid',
        borderColor: color.grayLight,
      },
    },
  };
});
