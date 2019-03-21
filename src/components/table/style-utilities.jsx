const sizes = ({ typography }) => ({
  '&.xs': {
    ...typography.tertiary(),
  },

  '&.sm': {
    ...typography.tertiary(),
  },

  '&.md': {
    ...typography.secondary(),
  },

  '&.lg': {
    ...typography.primary(),
  },
});

// Modifiers
const modifierItem = color => ({
  color,
});

const modifiers = palette => ({
  '&.success': modifierItem(palette.positive),
  '&.warning': modifierItem(palette.index),
  '&.danger': modifierItem(palette.negative),
});

// Borders
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const borderPosition = (position, palette) => ({
  [`&.border${capitalize(position)}`]: {
    [`border${capitalize(position)}`]: `1px solid ${palette.gray6}`,
  },
});

const borders = palette => {
  let combinedBorders = {};
  ['top', 'right', 'bottom', 'left'].forEach(position => {
    combinedBorders = Object.assign(combinedBorders, borderPosition(position, palette));
  });
  return {
    '&.border': {
      border: `1px solid ${palette.gray7}`,
    },

    ...combinedBorders,
  };
};

export default {
  sizes,
  modifiers,
  borders,
};
