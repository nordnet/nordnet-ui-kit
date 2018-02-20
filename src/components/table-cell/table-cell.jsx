import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './table-cell-styles';

function TableCell({
  tagName,
  classes,
  className,
  children,
  style: styleProp,
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
      [classes.hiddenOnMobile]: hiddenOnMobile,
      [classes.hiddenOnDesktop]: hiddenOnDesktop,
      [classes[`align-${align}`]]: align,
      [classes[`align-${alignMobile}--mobile`]]: alignMobile,
      [classes.collapsed]: collapsed,
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

  const style = {
    width: `${width}${typeof width === 'number' ? '%' : ''}`,
    flexBasis: `${flexBasisMobile}${typeof flexBasisMobile === 'number' ? '%' : ''}`,
    order: `${flexOrder}`,
    ...styleProp,
  };

  const Tag = tagName;
  return (
    <Tag {...rest} className={usedClassName} style={style}>
      <div className={classNames(classes.child, { [classes.ellipsis]: ellipsis })} data-title={title}>
        {children}
      </div>
    </Tag>
  );
}

TableCell.defaultProps = {
  mono: false,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
  ellipsis: true,
  hiddenOnDesktop: false,
  hiddenOnMobile: false,
  collapsed: false,
};

TableCell.propTypes = {
  /** @ignore */
  tagName: PropTypes.string.isRequired,
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
  hiddenOnDesktop: PropTypes.bool,
  hiddenOnMobile: PropTypes.bool,
};

export { TableCell as Component, styles };
export default injectSheet(styles)(TableCell);
