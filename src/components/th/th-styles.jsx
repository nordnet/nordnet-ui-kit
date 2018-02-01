import styleUtils from '../table/style-utilities';

export default theme => {
  const { palette, typography, mixins } = theme;

  return {
    th: {
      ...mixins.basicBoxSizing,
      ...styleUtils.flexItem(),
      ...styleUtils.sizes(),
      ...styleUtils.modifiers(palette),
      ...styleUtils.highlights(palette),
      ...styleUtils.borders(palette),
      ...styleUtils.ellipsis(),
      fontFamily: typography.primary.fontFamily,
      fontWeight: typography.fontWeightSemiBold,
      padding: [0, 6, 10, 6],
      margin: 0,

      [mixins.media('md')]: {
        minWidth: 40,
      },

      '&.width': {
        width: props => `${props.width}${typeof props.width === 'number' ? '%' : ''}`,
      },
    },
    flexBasis: {
      flexBasis: props => `${props.flexBasisDesktop}${typeof props.flexBasisDesktop === 'number' ? '%' : ''}`,
    },
    align: {
      textAlign: props => props.align,
    },
  };
};
