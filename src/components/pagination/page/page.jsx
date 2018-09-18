import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './page-styles';

class Page extends Component {
  onPageClick = () => {
    const { pageNumber, selectHandler } = this.props;

    selectHandler(pageNumber);
  };

  render() {
    const { classes, isSelected, isFirst, isLast, labelText, children } = this.props;
    return (
      <li
        className={cn(classes.item, {
          [classes.itemAlwaysVisible]: isSelected || isFirst || isLast,
        })}
      >
        <button
          type="button"
          className={cn(classes.button, {
            [classes.buttonSelected]: isSelected,
          })}
          onClick={this.onPageClick}
          disabled={isSelected}
          aria-label={labelText}
        >
          {children}
        </button>
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
  children: PropTypes.node.isRequired,
};
const enhance = injectSheet(styles);

export { Page as Component, styles };
export default enhance(Page);
