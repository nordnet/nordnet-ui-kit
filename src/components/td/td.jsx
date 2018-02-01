import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './td-styles';

function Td({
  classes,
  className,
  children,
  style,
  size,
  width,
  mono,
  collapsed,
  modifier,
  highlight,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  alignMobile,
  align,
  ellipsis,
  title,
  flexOrder,
  flexBasisMobile,
  flexBasisDesktop,
  hiddenOnDesktop,
  hiddenOnMobile,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(
    classes.td,
    size,
    {
      [classes.flexBasis]: flexBasisMobile || flexBasisDesktop,
      [classes.hidden]: hiddenOnMobile || hiddenOnDesktop,
      [classes.align]: alignMobile || align,
      [classes.flexOrder]: flexOrder,
      [classes.collapsed]: collapsed,
      hasWidth: width,
      width,
      [modifier]: modifier,
      [`highlight-${highlight}`]: highlight,
      mono,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
    },
    className,
  );

  return (
    <td {...rest} className={usedClassName} style={style}>
      <div className={classNames(classes.child, { [classes.ellipsis]: ellipsis })} data-title={title}>
        {children}
      </div>
    </td>
  );
}

Td.defaultProps = {
  mono: false,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
  ellipsis: true,
  flexBasisDesktop: 0,
  hiddenOnDesktop: false,
  hiddenOnMobile: false,
  collapsed: false,
};

Td.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /** Number is assumed to be a percentage which helps with responsiveness: */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mono: PropTypes.bool,
  collapsed: PropTypes.bool,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
  highlight: PropTypes.oneOf(['success', 'warning', 'danger']),
  border: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  alignMobile: PropTypes.oneOf(['left', 'right', 'center']),
  /** By default a column will add ellipsis if the width is overflown. **Note:** this will only work if the child is a String. */
  ellipsis: PropTypes.bool,
  title: PropTypes.string,
  flexOrder: PropTypes.number,
  flexBasisMobile: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexBasisDesktop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hiddenOnDesktop: PropTypes.bool,
  hiddenOnMobile: PropTypes.bool,
};

export { Td as Component, styles };
export default injectSheet(styles)(Td);
