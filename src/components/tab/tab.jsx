import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './tab-styles';

export const getElementType = (node, href) => {
  if (node) {
    return node;
  }

  return href ? 'a' : 'button';
};

class Tab extends Component {
  getDefaultHref() {
    const { href, singlePanel, index } = this.props;
    if (href) {
      return href;
    }

    return singlePanel ? null : `#tabs-tab-${index}`;
  }

  handleClick = e => {
    const { index, changeHandler, node } = this.props;
    if (!node) {
      e.preventDefault();
      changeHandler(index);
    }
  };

  render() {
    const { classes, children, selected, variant, index, className, node, to } = this.props;
    const href = this.getDefaultHref();
    const Element = getElementType(node, href);

    return (
      <li className={cn(classes.root, classes[variant], className)} role="presentation">
        <Element
          id={`tabs-tab-${index}`}
          className={classes.tab}
          href={href}
          role="tab"
          type={Element === 'button' ? 'button' : null}
          onClick={this.handleClick}
          aria-selected={selected}
          to={to}
        >
          {children}
        </Element>
      </li>
    );
  }
}

Tab.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  singlePanel: PropTypes.bool,
  changeHandler: PropTypes.func,
  className: PropTypes.string,
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  to: PropTypes.string,
};

Tab.defaultProps = {
  changeHandler: () => {},
  href: null,
  singlePanel: false,
  className: '',
  to: '',
};

export { Tab as Component, styles };
export default injectSheet(styles)(Tab);
