const styles = {
  badge: {
    display: 'inline-block',
    fontSize: '12px',
    padding: '2px 8px',
    lineHeight: 1,
    color: props => props.theme.palette.shades.dark.text.default,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    'background-color': props => props.theme.palette.variant.primary,
    borderRadius: '10px',
  },
  success: {
    'background-color': props => props.theme.palette.variant.success,
  },
  warning: {
    'background-color': props => props.theme.palette.variant.warning,
    color: props => props.theme.palette.text.default,
  },
  danger: {
    'background-color': props => props.theme.palette.variant.danger,
  },
};

export default styles;
