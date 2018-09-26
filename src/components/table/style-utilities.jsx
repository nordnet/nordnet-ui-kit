const sizes = () => ({
  '&.xs': {
    fontSize: '12px',
  },

  '&.sm': {
    fontSize: '12px',
  },

  '&.md': {
    fontSize: '14px',
  },

  '&.lg': {
    fontSize: '16px',
  },
});

// Modifiers
const modifierItem = color => ({
  color,
});

const modifiers = palette => ({
  '&.success': modifierItem(palette.variant.success),
  '&.warning': modifierItem(palette.variant.warning),
  '&.danger': modifierItem(palette.variant.danger),
});

// Borders
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const borderPosition = (position, palette) => ({
  [`&.border${capitalize(position)}`]: {
    [`border${capitalize(position)}`]: `1px solid ${palette.color.grayLighter}`,
  },
});

const borders = palette => {
  let combinedBorders = {};
  ['top', 'right', 'bottom', 'left'].forEach(position => {
    combinedBorders = Object.assign(combinedBorders, borderPosition(position, palette));
  });
  return {
    '&.border': {
      border: `1px solid ${palette.background.muted}`,
    },
    '&.fatBorder': {
      border: `2px solid ${palette.color.grayDarker}`,
    },

    ...combinedBorders,
  };
};

export default {
  sizes,
  modifiers,
  borders,
};
