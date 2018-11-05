import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './tab-styles';

const getElementType = href => (href ? 'a' : 'button');

class Tab extends Component {
  getDefaultHref() {
    const { href, singlePanel, index } = this.props;
    if (href) {
      return href;
    }

    return singlePanel ? null : `#tabs-tab-${index}`;
  }

  handleClick = e => {
    const { index, changeHandler } = this.props;

    e.preventDefault();
    changeHandler(index);
  };

  render() {
    const { classes, children, selected, variant, index, className } = this.props;
    const href = this.getDefaultHref();
    const Element = getElementType(href);

    return (
      <li className={cn(classes.root, classes[variant], className)} role="presentation">
        <Element
          id={`tabs-tab-${index}`}
          className={classes.tab}
          href={href}
          role="tab"
          type={Element === 'button' ? 'button' : null}
          aria-selected={selected}
          onClick={this.handleClick}
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
};

Tab.defaultProps = {
  changeHandler: () => {},
  href: null,
  singlePanel: false,
  className: '',
};

export { Tab as Component, styles };
export default injectSheet(styles)(Tab);
