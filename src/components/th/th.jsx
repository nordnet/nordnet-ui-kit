import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './th-styles';

function Th({
  classes,
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
  flexBasisMobile,
  flexBasisDesktop,
  hiddenOnDesktop,
  hiddenOnMobile,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(
    classes.th,
    size,
    {
      [classes.flexBasis]: flexBasisMobile || flexBasisDesktop,
      [classes.hidden]: hiddenOnMobile || hiddenOnDesktop,
      [classes.align]: align,
      width,
      [modifier]: modifier,
      [`highlight-${highlight}`]: highlight,
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

  return (
    <th {...rest} className={usedClassName} style={style}>
      {children}
    </th>
  );
}

Th.defaultProps = {
  align: 'left',
  mono: false,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
  ellipsis: true,
};

Th.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
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
  flexBasisMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexBasisDesktop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hiddenOnDesktop: PropTypes.bool,
  hiddenOnMobile: PropTypes.bool,
};

export { Th as Component, styles };
export default injectSheet(styles)(Th);
