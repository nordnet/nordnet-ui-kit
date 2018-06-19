import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import injectSheet from 'react-jss';
import styles from './popup-menu.styles';

class PopupMenuItem extends Component {
  // focus is tracked with react (downshift), and the html element never seems to get focus, so
  // so since the css focus is handled with a conditional class, the hover needs to be react tracked as well,
  // otherwise the :hover rule will take precedence over our linkFocus class.
  state = { hover: false };

  onMouseOver = () => this.setState({ hover: true });
  onMouseOut = () => this.setState({ hover: false });

  render() {
    const { node, children, topBorder, linkTo, onClick, disabled, focus, classes, ...downShiftProps } = this.props;
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
          {...downShiftProps}
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
