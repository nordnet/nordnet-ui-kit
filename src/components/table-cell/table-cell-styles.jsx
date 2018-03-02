import styleUtils from '../table/style-utilities';

export default theme => {
  const { palette, typography, mixins, transitions } = theme;

  return {
    td: {
      ...mixins.basicBoxSizing,
      ...styleUtils.sizes(),
      ...styleUtils.modifiers(palette),
      ...styleUtils.highlights(palette),
      ...styleUtils.borders(palette),

      fontFamily: typography.primary.fontFamily,
      fontWeight: 'inherit',

      padding: 0,
      minWidth: 20,
      maxHeight: 50,
      borderWidth: 1,

      transition: transitions.create(['max-height', 'border-width']),

      [mixins.maxMedia('md')]: {
        display: 'inline-block',
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: '100%',

        '&.hasWidth': {
          flexBasis: 'auto',
          flexGrow: 0,
        },
      },

      '&$collapsed': {
        [mixins.maxMedia('md')]: {
          maxHeight: 0,
          borderWidth: 0,
        },
      },

      [mixins.media('md')]: {
        borderWidth: 0,
      },
    },
    collapsed: {},
    ellipsis: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    hiddenOnMobile: {
      [mixins.maxMedia('md')]: {
        display: 'none',
      },
    },
    hiddenOnDesktop: {
      [mixins.media('md')]: {
        display: 'none',
      },
    },
    child: {
      display: 'block',
      margin: 8,
      height: 'calc(100% - 16px)',

      '&::before': {
        display: 'block',
        content: 'attr(data-title)',
        fontSize: '0.8em',
      },

      [mixins.media('md')]: {
        height: '100%',
        '&::before': {
          content: 'none',
        },
      },
    },
    'align-left': {
      textAlign: 'left',
    },
    'align-right': {
      textAlign: 'right',
    },
    'align-center': {
      textAlign: 'center',
    },
    'align-left--mobile': {
      [mixins.maxMedia('md')]: {
        textAlign: 'left',
      },
    },
    'align-right--mobile': {
      [mixins.maxMedia('md')]: {
        textAlign: 'right',
      },
    },
    'align-center--mobile': {
      [mixins.maxMedia('md')]: {
        textAlign: 'center',
      },
    },
  };
};
