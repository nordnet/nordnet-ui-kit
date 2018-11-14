import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './page-styles';

export const getElementType = (url, disabled) => {
  if (disabled) {
    return 'button';
  }

  return url ? 'a' : 'button';
};

const getButtonProps = (url, disabled) => {
  if (disabled) {
    return { type: 'button', disabled };
  }

  if (url) {
    return { href: url };
  }

  return { type: 'button' };
};

class Page extends Component {
  onPageClick = e => {
    const { pageNumber, selectHandler } = this.props;

    selectHandler(pageNumber, 'PAGE', e);
  };

  render() {
    const { classes, isSelected, isFirst, isLast, labelText, url, getNode, children } = this.props;
    const disabled = isSelected;
    const Element = getElementType(url, disabled);
    const commonProps = {
      className: cn(classes.button, {
        [classes.buttonSelected]: isSelected,
      }),
      onClick: this.onPageClick,
      'aria-label': labelText,
    };
    const buttonProps = getButtonProps(url, disabled);
    const defaultProps = { ...commonProps, ...buttonProps };
    const Node = getNode ? getNode(url, children, { ...commonProps }) : <Element {...defaultProps}>{children}</Element>;

    return (
      <li
        className={cn(classes.item, {
          [classes.itemAlwaysVisible]: isSelected || isFirst || isLast,
        })}
      >
        {Node}
      </li>
    );
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  selectHandler: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  labelText: PropTypes.string.isRequired,
  url: PropTypes.string,
  children: PropTypes.node.isRequired,
  getNode: PropTypes.func,
};

Page.defaultProps = {
  url: null,
  getNode: null,
};

const enhance = injectSheet(styles);

export { Page as Component, styles };
export default enhance(Page);
