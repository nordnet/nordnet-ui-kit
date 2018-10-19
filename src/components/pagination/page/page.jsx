import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './page-styles';

class Page extends Component {
  onPageClick = () => {
    const { pageNumber, selectHandler } = this.props;

    selectHandler(pageNumber);
  };

  render() {
    const { classes, isSelected, isFirst, isLast, labelText, url, children } = this.props;
    const disabled = isSelected;
    const Element = url && !disabled ? Link : 'button';
    const customProps = Element === Link ? { to: url } : { type: 'button', disabled };

    return (
      <li
        className={cn(classes.item, {
          [classes.itemAlwaysVisible]: isSelected || isFirst || isLast,
        })}
      >
        <Element
          {...customProps}
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
};

Page.defaultProps = {
  url: null,
};

const enhance = injectSheet(styles);

export { Page as Component, styles };
export default enhance(Page);
