import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './page-styles';

const Page = ({ classes, isSelected, isFirst, isLast, pageNumber, clickHandler, children }) => (
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
      onClick={() => {
        clickHandler(pageNumber);
      }}
      disabled={isSelected}
    >
      {children}
    </button>
  </li>
);

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
const enhance = injectSheet(styles);

export { Page as Component, styles };
export default enhance(Page);
