import React, { Children, Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';
import keyCodes from './keyCodes';

class PopupMenuList extends Component {
  constructor(props) {
    super(props);

    this.listItemElements = [];
    this.focusIndex = -1;
    this.listElement = null;

    this.state = {
      hasFocus: false,
    };
  }

  onFocus = () => {
    this.setState({
      hasFocus: true,
    });
  };

  onBlur = e => {
    const { listElement } = this;
    e.persist();
    setTimeout(() => {
      if (e.target && !listElement.contains(document.activeElement) && listElement !== document.activeElement) {
        this.focusIndex = -1;
        this.setState({
          hasFocus: false,
        });
        this.props.onBlur();
      }
    }, 0);
  };

  onKeyDown = e => {
    const { listItemElements } = this;
    if (e.keyCode === keyCodes.ARROW_DOWN) {
      if (listItemElements[this.focusIndex + 1]) {
        this.focusIndex += 1;
        listItemElements[this.focusIndex].focus();
      } else if (listItemElements[0]) {
        // wrap around to the top when the last item has been reached, only for arrow keys, not tab.
        this.focusIndex = 0;
        listItemElements[this.focusIndex].focus();
      }
      e.preventDefault();
    } else if (e.keyCode === keyCodes.ARROW_UP) {
      if (this.focusIndex === 0) {
        this.focusIndex = -1;
        this.props.yieldFocus();
      } else if (listItemElements[this.focusIndex - 1]) {
        this.focusIndex -= 1;
        listItemElements[this.focusIndex].focus();
      }
      e.preventDefault();
    } else if (e.keyCode === keyCodes.ESC) {
      this.setState({ hasFocus: false });
      listItemElements[this.focusIndex].blur();
    }
    this.props.onKeyDown(e);
  };

  onListItemFocus = index => () => {
    if (this.listItemElements[index]) {
      this.focusIndex = index;
      this.listItemElements[index].focus();
    }
  };

  setListItemElement = index => listItemElement => {
    this.listItemElements[index] = listItemElement;
    if (index === 0) {
      this.props.firstListItemRef(listItemElement);
    }
  };

  setListElement = listElement => {
    this.listElement = listElement;
  };

  render() {
    const { width, classes, children, enter, exit, maxHeight, isOpen, buttonHasFocus } = this.props;
    const { hasFocus } = this.state;
    const itemContainerStyle = maxHeight === 'none' ? {} : { maxHeight, overflowY: 'scroll' };
    let notDisabledIndex = 0;
    console.log({ buttonHasFocus, hasFocus, isOpen });
    return (
      <TransitionGroup>
        {isOpen &&
          (buttonHasFocus || hasFocus) && (
            <CSSTransition classNames={classes.menuSlideDown} timeout={{ exit, enter }}>
              <div className={classes.menuPopup} style={{ width }}>
                <div className={classes.menuItemContainer} style={itemContainerStyle}>
                  <ul className={classes.menuItems} ref={this.setListElement} onFocus={this.onFocus} onBlur={this.onBlur}>
                    {Children.map(children, child => {
                      if (child.props.disabled) return child;
                      const childWithCallbackProps = cloneElement(child, {
                        listItemRef: this.setListItemElement(notDisabledIndex),
                        onFocus: this.onListItemFocus(notDisabledIndex),
                        onKeyDown: this.onKeyDown,
                      });
                      notDisabledIndex += 1;
                      return childWithCallbackProps;
                    })}
                  </ul>
                </div>
              </div>
            </CSSTransition>
          )}
      </TransitionGroup>
    );
  }
}

PopupMenuList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  buttonHasFocus: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  firstListItemRef: PropTypes.func.isRequired,
  yieldFocus: PropTypes.func.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  enter: PropTypes.number.isRequired,
  exit: PropTypes.number.isRequired,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default injectSheet(styles)(PopupMenuList);
