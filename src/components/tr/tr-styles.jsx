import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default theme => {
  const { palette, mixins } = theme;

  return {
    tr: {
      ...mixins.basicBoxSizing,
      ...styleUtils.flexRow(),
      ...styleUtils.sizes(),
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent',
      flexWrap: 'wrap',
      overflow: 'hidden',

      '&.primary': {
        background: color.grayLight,
        borderColor: color.gray,
      },

      '&.secondary': {
        background: color.grayDark,
        borderColor: color.grayDarker,
        color: color.white,
      },

      '&.clone': {
        opacity: 0,
      },

      '&.sticky': {
        position: 'absolute',
        background: palette.background.default,
        [mixins.media('md')]: {
          '&.sticky': {
            position: () => 'fixed',
          },
        },
      },

      '&.border': {
        border: '1px solid',
        borderColor: color.grayLight,
      },

      [mixins.media('md')]: {
        flexWrap: 'nowrap',
        borderCollapse: 'collapse',
      },
    },
  };
};
