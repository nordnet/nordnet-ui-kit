import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TbodyStyles from './tbody-styles';

function Tbody({
  className,
  children,
  style,
  size,
  colorAlternateRows,
  maxHeight,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  ...rest
}, { styleManager }) {
  const classes = styleManager.render(TbodyStyles);
  const usedClassName = classNames(classes.tbody, size, {
    'alternate-rows': colorAlternateRows,
    scroll: maxHeight,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
  }, className);

  const tbodyStyle = Object.assign(maxHeight ? { maxHeight } : {}, style);

  return (
    <tbody {...rest} className={usedClassName} style={tbodyStyle}>
      { children }
    </tbody>
  );
}

Tbody.defaultProps = {
  colorAlternateRows: true,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
};

Tbody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  colorAlternateRows: PropTypes.bool,
  /** Unitless pixel value */
  maxHeight: PropTypes.number,
  border: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool,
};

Tbody.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Tbody;
