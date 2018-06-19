import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';

class PopupMenuItem extends Component {
  // we need to track hover in the state since the focus prop comes from above, and conditionally adds the linkFocus class
  // which doesn't have precedence over the link:hover css :(
  state = { hover: false };

  onMouseOver = () => this.setState({ hover: true });
  onMouseOut = () => this.setState({ hover: false });

  render() {
    const { node, children, topBorder, linkTo, onClick, disabled, focus, classes } = this.props;
    const { hover } = this.state;
    const Element = node || 'button';
    const className = cn(classes.link, {
      [classes.linkFocus]: focus,
      [classes.linkHover]: hover && !disabled,
    });
    return (
      <li className={classes.item}>
        {topBorder && <hr className={classes.hr} />}
        <Element
          to={linkTo}
          onClick={onClick}
          className={className}
          disabled={disabled}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          {children}
        </Element>
      </li>
    );
  }
}

PopupMenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClick: PropTypes.func,
  linkTo: PropTypes.string,
  topBorder: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
};

PopupMenuItem.defaultProps = {
  onClick: () => {},
  children: '',
  linkTo: '#',
  topBorder: false,
  disabled: false,
  focus: false,
};

export { PopupMenuItem as Component, styles };
export default injectSheet(styles)(PopupMenuItem);
