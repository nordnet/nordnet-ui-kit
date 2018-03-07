import styleUtils from '../table/style-utilities';

export default theme => {
  const { palette, mixins, typography } = theme;

  return {
    tfoot: {
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes(),
      fontWeight: typography.fontWeightSemiBold,
      borderTop: `2px solid ${palette.shades.dark.text.muted}`,
    },
    hiddenOnMobile: {
      [mixins.maxMedia('md')]: {
        display: 'none',
      },
    },
  };
};
