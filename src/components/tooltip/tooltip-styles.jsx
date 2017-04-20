import { createStyleSheet } from 'jss-theme-reactor';

const zIndexTooltip = 2;

export default createStyleSheet('Tooltip', (theme) => {
  const { palette, transitions } = theme;

  return {
    tooltip: {
      color: palette.variant.primary,
      position: 'relative',
      display: 'inline-block',
    },

    container: {
      cursor: 'pointer',
      paddingLeft: '.2em',
      display: 'inline-block',

      ' .icon': {
        verticalAlign: 'text-bottom',
      },

      '&:after': {
        position: 'absolute',
        content: '""',
      },

      '&.below:after, &.above:after': {
        width: '100%',
        height: 8,
        left: 0,
      },

      '&.below:after': {
        bottom: -4,
      },

      '&.above:after': {
        top: -8,
      },

      '&.right:after, &.left:after': {
        height: '100%',
        width: 12,
      },

      '&.left:after': {
        left: -12,
      },
    },

    popup: {
      position: 'absolute',
      textAlign: 'left',
      fontSize: '.8em',
      padding: 8,
      color: '#fff',
      background: 'rgba(0, 0, 0, 0.75)',
      borderRadius: 5,
      whiteSpace: 'nowrap',
      zIndex: zIndexTooltip,
      transition: transitions.create(['opacity']),

      '&:before': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'block',
        content: '""',
        width: 0,
        height: 0,
        zIndex: zIndexTooltip,
      },

      '&.below': {
        left: '50%',
        marginTop: 4,
        transform: 'translateX(-50%)',

        '&:before': {
          top: -8,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderBottom: '8px solid rgba(0, 0, 0, 0.75)',
        },
      },

      '&.left': {
        right: 12,
        top: '50%',
        marginRight: '100%',
        transform: 'translate(0, -50%)',

        '&:before': {
          left: 'inherit',
          right: -12,
          marginTop: -8,
          top: '50%',
          content: '""',
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: '8px solid rgba(0, 0, 0, 0.75)',
        },
      },

      '&.right': {
        left: 12,
        top: '50%',
        marginLeft: '100%',
        transform: 'translate(0, -50%)',

        '&:before': {
          right: 'inherit',
          left: -4,
          marginTop: -8,
          top: '50%',
          content: '""',
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderRight: '8px solid rgba(0, 0, 0, 0.75)',
        },
      },

      '&.above': {
        left: '50%',
        bottom: '100%',
        marginBottom: 8,
        transform: 'translateX(-50%)',

        '&:before': {
          bottom: -8,
          borderTop: '8px solid rgba(0, 0, 0, 0.75)',
          borderRight: '8px solid transparent',
          borderLeft: '8px solid transparent',
        },
      },
    },
  };
});
