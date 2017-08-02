import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './tbody-styles';

function Tbody({
  classes,
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
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(
    classes.tbody,
    size,
    {
      'alternate-rows': colorAlternateRows,
      scroll: maxHeight,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
    },
    className,
  );

  const tbodyStyle = Object.assign(maxHeight ? { maxHeight } : {}, style);

  return (
    <tbody {...rest} className={usedClassName} style={tbodyStyle}>
      {children}
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
  /** @ignore */
  classes: PropTypes.object.isRequired,
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


export default injectSheet(styles)(Tbody);
