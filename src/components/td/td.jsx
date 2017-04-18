import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TdStyles from './td-styles';

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
  ...rest
}, { styleManager }) {
  const classes = styleManager.render(TdStyles);
  const usedClassName = classNames(
    classes.td, size,
    {
      hasWidth: width,
      [modifier]: modifier,
      [`highlight-${highlight}`]: highlight,
      [`align-${align}`]: align,
      mono,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      ellipsis,
    },
    className,
  );

  const tdStyle = Object.assign(
    {},
    width && { width: `${width}${typeof width === 'number' ? '%' : ''}` },
    style,
  );

  return <td {...rest} className={usedClassName} style={tdStyle}>{ children }</td>;
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

Td.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};


export default Td;
