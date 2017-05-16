import c from 'color';

const sizes = () => ({
  '&.xs': {
    fontSize: '12px',
  },

  '&.sm': {
    fontSize: '14px',
  },

  '&.md': {
    fontSize: '16px',
  },

  '&.lg': {
    fontSize: '18px',
  },
});

// Modifiers
const modifierItem = color => ({
  color,

  '.tr.secondary &': {
    background: `rgba(${c(color).lighten(0.1).hex()}, 0.9)`,
  },
});

const modifiers = palette => ({
  '&.success': modifierItem(palette.variant.success),
  '&.warning': modifierItem(palette.variant.warning),
  '&.danger': modifierItem(palette.variant.danger),
});

// Highlights
const highlightItem = (color, theadColor = undefined) => ({
  background: `rgba(${color}, .2)`,

  '.thead &': {
    background: c(color).lighten(0.1).hex(),
    color: theadColor || color,
  },
});

const highlights = palette => ({
  '&.highlight-success': highlightItem(palette.variant.success),
  '&.highlight-warning': highlightItem(palette.variant.warning, 'inherit'),
  '&.highlight-danger': highlightItem(palette.variant.danger),
});

// Borders
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const borderPosition = (position, palette) => ({
  [`&.border${capitalize(position)}`]: {
    [`border${capitalize(position)}`]: `1px solid ${palette.background.muted}`,
  },
});

const borders = palette => {
  let combinedBorders = {};
  ['top', 'right', 'bottom', 'left'].forEach(position => {
    combinedBorders = Object.assign(
      combinedBorders,
      borderPosition(position, palette),
    );
  });
  return {
    '&.border': {
      border: `1px solid ${palette.background.muted}`,
    },

    ...combinedBorders,
  };
};

const align = () => ({
  '&.align-left': {
    textAlign: 'left',
  },

  '&.align-right': {
    textAlign: 'right',
  },

  '&.align-center': {
    textAlign: 'center',
  },
});

const flexRow = () => ({
  display: 'flex',
  flexFlow: 'row nowrap',
});

const flexItem = () => ({
  display: 'inline-block',
  padding: '3px 6px',
  flexGrow: 1,
  flexBasis: 0,
  maxWidth: '100%',

  '&.hasWidth': {
    flexBasis: 'auto',
    flexGrow: 0,
  },
});

const ellipsis = () => ({
  '&.ellipsis': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export default {
  sizes,
  modifiers,
  highlights,
  borders,
  align,
  flexRow,
  flexItem,
  ellipsis,
};
