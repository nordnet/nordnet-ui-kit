import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button } from '../../../';
import styles from './stepper-styles';

const Stepper = ({ classes, clickable, clickHandler, children }) => (
  <li className={classes.item}>
    <Button type="button" variant="link" modifier="action" className={classes.button} onClick={clickHandler} disabled={!clickable}>
      {children}
    </Button>
  </li>
);

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  clickable: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const enhance = injectSheet(styles);

export { Stepper as Component, styles };
export default enhance(Stepper);
