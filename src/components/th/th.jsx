import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import ThStyles from './th-styles';

function Th(
  {
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
  },
  { styleManager },
) {
  const classes = styleManager.render(ThStyles);
  const usedClassName = classNames(
    classes.th,
    size,
    {
      [modifier]: modifier,
      [`highlight-${highlight}`]: highlight,
      [`align-${align}`]: align,
      mono,
      hasWidth: width,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      ellipsis,
    },
    className,
  );

  const thStyle = Object.assign({}, width && { width: `${width}${typeof width === 'number' ? '%' : ''}` }, style);

  return <th {...rest} className={usedClassName} style={thStyle}>{children}</th>;
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

Th.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Th;
