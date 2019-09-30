import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './tbody-styles';

function Tbody({
  classes,
  className,
  children,
  size,
  colorAlternateRows,
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
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
    },
    className,
  );

  return (
    <tbody {...rest} className={usedClassName}>
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
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  colorAlternateRows: PropTypes.bool,
  /** Unitless pixel value */
  border: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool,
};

export default injectSheet(styles, { injectTheme: true })(Tbody);
