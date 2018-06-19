import PropTypes from 'prop-types';
import React, { Children, cloneElement } from 'react';
import injectSheet from 'react-jss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Downshift from 'downshift';
import styles from './popup-menu.styles';
import { Icon } from '../../';

const PopupMenu = ({ width, toggleButton, classes, children, enter, exit, maxHeight, onToggle, isOpen: isOpenFromProp }) => {
  const itemContainerStyle = maxHeight === 'none' ? {} : { maxHeight, overflowY: 'scroll' };
  return (
    // If isOpenFromProp is undefined, Downshift will keep track of its own internal state
    <Downshift isOpen={isOpenFromProp}>
      {({ isOpen, getToggleButtonProps, getItemProps, highlightedIndex }) => (
        <span className={classes.menuContainer}>
          <button
            className={classes.menuButton}
            {...getToggleButtonProps({
              'aria-label': null, // let the labeling be handled by the toggleButton
              onClick: () => onToggle(!isOpen), // negate isOpen since we want the new value (about to be set).
              onBlur: () => onToggle(false), // if the whole popup lost its focus.
            })}
          >
            {toggleButton || <Icon.VerticalEllipsis height={28} width={28} stroke="currentColor" fill="currentColor" />}
          </button>
          <TransitionGroup>
            {isOpen && (
              <CSSTransition classNames={classes.menuSlideDown} timeout={{ exit, enter }}>
                <div className={classes.menuPopup} style={{ width }}>
                  <div className={classes.menuItemContainer} style={itemContainerStyle}>
                    <ul className={classes.menuItems}>
                      {Children.map(children, (child, index) =>
                        cloneElement(child, {
                          ...getItemProps({
                            item: index,

                            disabled: child.props.disabled,
                            onClick: child.props.onClick,
                          }),
                          focus: index === highlightedIndex,
                        }),
                      )}
                    </ul>
                  </div>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </span>
      )}
    </Downshift>
  );
};

PopupMenu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // eslint-disable-next-line react/no-unused-prop-types
  isOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  /** Called when the button is toggled with a boolean value whether the menu is open or not. */
  onToggle: PropTypes.func,
  children: PropTypes.node.isRequired,
  enter: PropTypes.number,
  exit: PropTypes.number,
  toggleButton: PropTypes.node,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PopupMenu.defaultProps = {
  width: 200,
  onToggle: () => {},
  enter: 100,
  exit: 100,
  toggleButton: null,
  maxHeight: 'none',
};

export { PopupMenu as Component, styles };
export default injectSheet(styles)(PopupMenu);
