import styleUtils from '../style-utilities';

export default ({ mixins, typography, palette: { color } }) => ({
  tfoot: {
    ...mixins.basicBoxSizing,
    ...styleUtils.sizes({ typography }),
    // FIXME: talk to designers,
    fontWeight: typography.primary({ weight: 'bold' }).fontWeight,
    borderTop: `2px solid ${color.grayDarker}`,
  },
  hiddenOnMobile: {
    [mixins.maxMedia('md')]: {
      display: 'none',
    },
  },
});
