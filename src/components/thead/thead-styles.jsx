import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default theme => {
  const { palette, mixins, typography } = theme;

  return {
    thead: {
      width: '100%',
      ...styleUtils.sizes(),
      ...mixins.basicBoxSizing,
      fontWeight: typography.fontWeightSemiBold,
      borderColor: color.gray,
      borderBottom: `2px solid ${palette.shades.dark.text.muted}`,

      '&.primary, &.secondary': {
        borderBottom: 0,
      },

      '&.primary th': {
        background: color.gray,
      },

      '&.secondary th': {
        background: color.grayDarker,
        color: color.white,
      },

      '&.primary tr': {
        borderColor: color.gray,
      },

      '&.secondary tr': {
        borderColor: color.grayDarker,
      },
    },
    hiddenOnMobile: {
      [mixins.maxMedia('md')]: {
        display: 'none',
      },
    },
    borderBottom: {
      border: 0,
      '& th': {
        background: `linear-gradient(to top, ${palette.shades.dark.text.muted} 2px, ${color.white} 2px)`,
      },
    },
  };
};
