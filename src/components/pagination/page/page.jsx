import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { getElementType } from '../../button/button';
import styles from './page-styles';

const getButtonProps = (node, url, disabled) => {
  if (disabled) {
    return { type: 'button', disabled };
  }

  if (node && url) {
    return { to: url };
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
    const { classes, isSelected, isFirst, isLast, labelText, url, node, children } = this.props;
    const disabled = isSelected;
    const Element = getElementType(node, url, disabled);
    const buttonProps = getButtonProps(node, url, disabled);

    return (
      <li
        className={cn(classes.item, {
          [classes.itemAlwaysVisible]: isSelected || isFirst || isLast,
        })}
      >
        <Element
          {...buttonProps}
          className={cn(classes.button, {
            [classes.buttonSelected]: isSelected,
          })}
          onClick={this.onPageClick}
          aria-label={labelText}
        >
          {children}
        </Element>
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
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Page.defaultProps = {
  url: null,
  node: null,
};

const enhance = injectSheet(styles);

export { Page as Component, styles };
export default enhance(Page);
