import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './popup-menu.styles';

const PopupMenuItem = ({
  node,
  children,
  topBorder,
  linkTo,
  onClick,
  onKeyDown,
  listItemRef,
  disabled,
  classes,
  onFocus,
  className,
}) => {
  const Element = disabled ? 'button' : node;
  const elementProps = Element === 'button' ? { type: 'button', disabled } : { to: linkTo };

  return (
    <li className={cn(classes.item, className)}>
      {topBorder && <hr className={classes.hr} />}
      {/* Since putting the ref for listItemRef on the actual Element didn't work as expected
       * if the Element was a React Router Link, we put it on a wrapped span and traverse down
       * to the native element ref corresponding to the Element. This is because we want to
       * call focus on the ref from the PopupMenuList.
       */}
      <span ref={ref => ref && listItemRef && listItemRef(ref.childNodes[0])}>
        <Element
          {...elementProps}
          className={classes.link}
          onClick={onClick}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
        >
          {children}
        </Element>
      </span>
    </li>
  );
};

PopupMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
  topBorder: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  /** These 3 are set by PopupMenuList and should not be provided by the end user. */
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  listItemRef: PropTypes.func,
};

PopupMenuItem.defaultProps = {
  onClick: () => {},
  node: 'button',
  children: '',
  linkTo: '#',
  topBorder: false,
  disabled: false,
  onFocus: null,
  onKeyDown: null,
  listItemRef: null,
};

export { PopupMenuItem as Component, styles };
export default injectSheet(styles)(PopupMenuItem);
