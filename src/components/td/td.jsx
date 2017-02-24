import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './td.scss';

function Td({
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
  ...rest,
}) {
  const classes = classNames('td', {
    'td--xs': size === 'xs',
    'td--sm': size === 'sm',
    'td--md': size === 'md',
    'td--lg': size === 'lg',
    'td--has-width': width,
    'td--mono': mono,
    'td--success': modifier === 'success',
    'td--warning': modifier === 'warning',
    'td--danger': modifier === 'danger',
    'td--highlight-success': highlight === 'success',
    'td--highlight-warning': highlight === 'warning',
    'td--highlight-danger': highlight === 'danger',
    'td--border': border,
    'td--border-top': borderTop,
    'td--border-right': borderRight,
    'td--border-bottom': borderBottom,
    'td--border-left': borderLeft,
    'td--align-left': align === 'left',
    'td--align-right': align === 'right',
    'td--align-center': align === 'center',
    'td--ellipsis': ellipsis,
  }, className);

  const tdStyle = Object.assign(
    {},
    width && { width: `${width}${typeof width === 'number' ? '%' : ''}` },
    style
  );

  return <td { ...rest } className={ classes } style={ tdStyle }>{ children }</td>;
}

Td.defaultProps = {
  mono: false,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
  ellipsis: true,
};

Td.propTypes = {
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
  /** By default a column will add ellipsis if the width is overflown. **Note:** this will only work if the child is a String. */
  ellipsis: PropTypes.bool,
};

export default Td;
