import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './th.scss';

function Th({
  className,
  children,
  style,
  size,
  width,
  mono,
  modifier,
  highlight,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  align,
  ellipsis,
  ...rest
}) {
  const classes = classNames('th', {
    'th--xs': size === 'xs',
    'th--sm': size === 'sm',
    'th--md': size === 'md',
    'th--lg': size === 'lg',
    'th--has-width': width,
    'th--mono': mono,
    'th--success': modifier === 'success',
    'th--warning': modifier === 'warning',
    'th--danger': modifier === 'danger',
    'th--highlight-success': highlight === 'success',
    'th--highlight-warning': highlight === 'warning',
    'th--highlight-danger': highlight === 'danger',
    'th--border': border,
    'th--border-top': borderTop,
    'th--border-right': borderRight,
    'th--border-bottom': borderBottom,
    'th--border-left': borderLeft,
    'th--align-left': align === 'left',
    'th--align-right': align === 'right',
    'th--align-center': align === 'center',
    'th--ellipsis': ellipsis,
  }, className);

  const thStyle = Object.assign(
    {},
    width && { width: `${width}${typeof width === 'number' ? '%' : ''}` },
    style,
  );

  return <th {...rest} className={classes} style={thStyle}>{ children }</th>;
}

Th.defaultProps = {
  mono: false,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
  ellipsis: true,
};

Th.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /** Number is assumed to be a percentage which helps with responsiveness: */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mono: PropTypes.bool,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
  highlight: PropTypes.oneOf(['success', 'warning', 'danger']),
  border: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  /** By default a header column will add ellipsis if the width is overflown. **Note:** this will only work if the child is a String. */
  ellipsis: PropTypes.bool,
};

export default Th;
