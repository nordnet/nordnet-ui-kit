import styleUtils from '../table/style-utilities';

export default ({ mixins, typography, palette: { color } }) => ({
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
});
