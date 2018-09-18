import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './ellipsis-styles';

const Ellipsis = ({ classes, hiddenOnDesktop }) => (
  <li
    className={cn(classes.item, {
      [classes.hiddenOnDesktop]: hiddenOnDesktop,
    })}
  >
    <span>...</span>
  </li>
);

Ellipsis.propTypes = {
  classes: PropTypes.object.isRequired,
  hiddenOnDesktop: PropTypes.bool.isRequired,
};

const enhance = injectSheet(styles);

export { Ellipsis as Component, styles };
export default enhance(Ellipsis);
