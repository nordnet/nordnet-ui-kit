import styleUtils from '../table/style-utilities';
import color from '../../styles/color';

export default theme => {
  const { mixins, typography } = theme;

  return {
    tfoot: {
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes(),
      fontWeight: typography.fontWeightSemiBold,
      borderTop: `2px solid ${color.grayDarker}`,
    },
    hiddenOnMobile: {
      [mixins.maxMedia('md')]: {
        display: 'none',
      },
    },
  };
};
