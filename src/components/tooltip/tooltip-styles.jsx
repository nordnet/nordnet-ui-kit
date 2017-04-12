import { createStyleSheet } from 'jss-theme-reactor';
import variables from '../../utilities/variables';

const zIndexTooltip = 2;

export default createStyleSheet('Tooltip', (theme) => {
  const { palette } = theme;

  return {
    tooltip: {
      color: palette.variant.primary,
      marginLeft: '.2em',
      position: 'relative',
      display: 'inline',

      '& .container': {
        cursor: 'pointer',
        display: 'inline-block',

        ' .icon': {
          verticalAlign: 'text-bottom',
        },
      },

      '& .popup': {
        position: 'absolute',
        textAlign: 'left',
        fontSize: '.8em',
        padding: '8px',
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.75)',
        whiteSpace: 'nowrap',
        zIndex: zIndexTooltip,
        transition: `opacity .3s ${variables.easeOut}`,

        '&:before': {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'block',
          content: '""', // Need the extra inner "", otherwise stripped away
          width: 0,
          height: 0,
          zIndex: zIndexTooltip,
        },

        '&.below': {
          left: '50%',
          marginTop: '8px',
          transform: 'translateX(-50%)',

          '&:before': {
            top: '-8px',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderBottom: '8px solid rgba(0, 0, 0, 0.75)',
          },
        },

        '&.left': {
          right: '12px',
          top: '12px',
          marginRight: '100%',
          transform: 'translate(0, -50%)',

          '&:before': {
            left: 'inherit',
            right: '-12px',
            marginTop: '-0.8rem',
            top: '50%',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '8px solid rgba(0, 0, 0, 0.75)',
          },
        },

        '&.right': {
          top: '8px',
          left: '12px',
          marginLeft: '100%',
          transform: 'translate(0, -50%)',

          '&:before': {
            left: '-4px',
            top: '50%',
            marginTop: '-0.8rem',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderRight: '8px solid rgba(0, 0, 0, 0.75)',
          },
        },

        '&.above': {
          left: '50%',
          marginBottom: '8px',
          transform: 'translateX(-50%)',

          '&:before': {
            bottom: '-8px',
            borderTop: '8px solid rgba(0, 0, 0, 0.75)',
            borderRight: '8px solid transparent',
            borderLeft: '8px solid transparent',
          },
        },
      },
    },
  };
});
