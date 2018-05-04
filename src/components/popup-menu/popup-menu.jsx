import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './popup-menu.styles';
import { Icon } from '../../';

class PopupMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = ({ target } = {}) => {
    if (target && this.onOutsideElement && !this.onOutsideElement.contains(target)) {
      this.handleClickOutside();
    }
  };

  handleClickOutside = () => {
    if (this.state.isOpen) {
      this.toggleMenu(false);
    }
  };

  toggleMenu = (forceOpenToggle = null) => {
    const isOpen = forceOpenToggle !== null ? forceOpenToggle : !this.state.isOpen;
    this.setState({
      isOpen,
    });
    this.props.onToggle(isOpen);
  };

  toggleMenuClick = () => {
    this.toggleMenu();
  };

  render() {
    const { width, toggleButton, classes, children, enter, exit, maxHeight } = this.props;
    const { isOpen } = this.state;
    const itemContainerStyle = maxHeight === 'none' ? {} : { maxHeight, overflowY: 'scroll' };
    return (
      <span
        className={classes.menuContainer}
        ref={element => {
          this.onOutsideElement = element;
        }}
      >
        <button className={classes.menuButton} onClick={this.toggleMenuClick}>
          {toggleButton || <Icon.VerticalEllipsis height={28} width={28} stroke="currentColor" fill="currentColor" />}
        </button>
        <TransitionGroup>
          {isOpen && (
            <CSSTransition classNames={classes.menuSlideDown} timeout={{ exit, enter }}>
              <div className={classes.menuPopup} style={{ width }}>
                <div className={classes.menuItemContainer} style={itemContainerStyle}>
                  <ul className={classes.menuItems}>{children}</ul>
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </span>
    );
  }
}

PopupMenu.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
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
  isOpen: false,
  enter: 100,
  exit: 100,
  toggleButton: null,
  maxHeight: 'none',
};

export { PopupMenu as Component, styles };
export default injectSheet(styles)(PopupMenu);
