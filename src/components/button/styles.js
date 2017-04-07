const merge = (x, y) => Object.assign({}, x, y);

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
};

const sizePaddings = {
  xs: 4,
  sm: 7,
  md: 10,
  lg: 13,
};

const modifier = (variant, color, colorFocus) => {
  const base = {
    'outline-color': color,
  };
  if (variant === 'primary') {
    return merge(base, {
      background: color,
      borderColor: color,
      '&:hover': {
        background: colorFocus,
        borderColor: colorFocus,
      },
    });
  }

  if (variant === 'secondary') {
    return merge(base, {
      color,
      borderColor: color,
      '&:hover': {
        color: colorFocus,
        borderColor: colorFocus,
      },
    });
  }
  if (variant === 'link') {
    return merge(base, {
      color,
      '&:hover': {
        color: colorFocus,
      },
    });
  }
};

const size = x => ({
  fontSize: fontSizes[x],
  padding: sizePaddings[x],
});

const styles = {
  button: {
    display: 'inline-block',
    border: 0,
    fontFamily: 'inherit',
    fontWeight: 700,
    lineHeight: 1,
    // transition: props => `all .1s ${props.theme.transitions.easeOut}`,
    textDecoration: 'none',
    userSelect: 'none',
    textAlign: 'center',
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  block: {
    display: 'block',
    width: '100%',
  },
  'size--xs': size('xs'),
  'size--sm': size('sm'),
  'size--md': size('md'),
  'size--lg': size('lg'),
  primary: {
    background: props => props.theme.palette.variant.primary,
    border: props => `2px solid ${props.theme.palette.variant.primary}`,
    color: props => props.theme.palette.shades.light.text.default,

    '&--warning': {
      color: props => props.theme.palette.shades.dark.text.default,
    },

    '&:hover': {
      // background: props => props.theme.palette.$color-primary--focus',
      // borderColor: props => props.theme.palette.$color-primary--focus',
    },

    '&:disabled': {
      background: '$color-background-disabled',
      border: '2px solid $color-background-disabled',
      color: '$colorDisabled',

      '&:hover': {
        background: '$color-background-disabled',
        borderColor: '$color-background-disabled',
      },
    },
    '&--success': modifier('primary', '$color-success', '$color-success--focus'),
    '&--warning': modifier('primary', '$color-warning', '$color-warning--focus'),
    '&--danger': modifier('primary', '$color-danger', '$color-danger--focus'),
  },
  secondary: {
    background: 'none',
    color: '$color-primary',
    border: '2px solid $color-primary',

    '&:hover': {
      color: '$color-primary--focus',
      'border-color': '$color-primary--focus',
    },

    '&:disabled': {
      border: '2px solid $color-background-disabled',
      color: '$color-background-disabled',

      '&:hover': {
        color: '$color-background-disabled',
        'border-color': '$color-background-disabled',
      },
    },

    '&--success': modifier('secondary', '$color-success', '$color-success--focus'),
    '&--warning': modifier('secondary', '$color-warning', '$color-warning--focus'),
    '&--danger': modifier('secondary', '$color-danger', '$color-danger--focus'),
  },
  link: {
    background: 'none',
    paddingLeft: '0',
    paddingRight: '0',
    color: '$color-primary',
    border: '2px solid transparent',
    fontWeight: 600,
    cursor: 'pointer',

    '&:hover': {
      color: '$color-primary-dark',
    },

    '&:disabled': {
      color: '$color-background-disabled',

      '&:hover': {
        color: '$color-background-disabled',
      },
    },

    '&--success': modifier('link', '$color-success', '$color-success--focus'),
    '&--warning': modifier('link', '$color-warning', '$color-warning--focus'),
    '&--danger': modifier('link', '$color-danger', '$color-danger--focus'),
  },
};


export default styles;
