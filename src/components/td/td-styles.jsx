import styleUtils from '../table/style-utilities';

export default theme => {
  const { palette, typography, mixins, transitions } = theme;

  return {
    td: {
      ...mixins.basicBoxSizing,
      ...styleUtils.flexItem(),
      ...styleUtils.sizes(),
      ...styleUtils.modifiers(palette),
      ...styleUtils.highlights(palette),
      ...styleUtils.borders(palette),

      fontFamily: typography.primary.fontFamily,
      fontWeight: 'inherit',

      padding: 0,
      fontSize: 14,
      minWidth: 20,
      maxHeight: 50,
      display: 'block',
      transition: transitions.create(['max-height', 'border-width']),

      [mixins.media('md')]: {
        display: 'inline-block',
        minWidth: 40,
        border: 0,
        '&::before': {
          content: 'none',
        },
      },

      '&.width': {
        width: props => `${props.width}${typeof props.width === 'number' ? '%' : ''}`,
      },

      '&$collapsed': {
        maxHeight: 0,
        borderWidth: 0,

        [mixins.media('md')]: {
          maxHeight: 50,
          borderWidth: 1,
        },
      },
    },
    collapsed: {},
    ellipsis: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    hidden: {
      display: props => (props.hiddenOnMobile ? 'none' : 'block'),
      [mixins.media('md')]: {
        display: props => (props.hiddenOnDesktop ? 'none' : 'inline-block'),
      },
    },
    flexBasis: {
      flexBasis: props => `${props.flexBasisMobile}${typeof props.flexBasisMobile === 'number' ? '%' : ''}`,

      [mixins.media('md')]: {
        flexBasis: props => `${props.flexBasisDesktop}${typeof props.flexBasisDesktop === 'number' ? '%' : ''}`,
      },
    },
    child: {
      display: 'block',
      margin: [8, 6],
      height: 'calc(100% - 16px)',

      '&::before': {
        display: 'block',
        content: 'attr(data-title)',
        fontSize: '0.8em',
      },

      [mixins.media('md')]: {
        padding: [8, 6],
        margin: 0,
        height: '100%',
        '&::before': {
          content: 'none',
        },
      },
    },
    align: {
      textAlign: props => (props.alignMobile ? props.alignMobile : props.align),

      [mixins.media('md')]: {
        textAlign: props => props.align,
      },
    },
    flexOrder: {
      order: props => props.flexOrder,

      [mixins.media('md')]: {
        order: () => 1,
      },
    },
  };
};
