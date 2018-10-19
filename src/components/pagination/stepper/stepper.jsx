import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Button } from '../../../';
import styles from './stepper-styles';

const Stepper = ({ classes, disabled, clickHandler, children, url }) => {
  const buttonProps = url && !disabled ? { node: Link, to: url } : { disabled, type: 'button' };

  return (
    <Button {...buttonProps} variant="link" modifier="action" className={classes.button} onClick={clickHandler}>
      {children}
    </Button>
  );
};

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
};

Stepper.defaultProps = {
  url: null,
};

const enhance = injectSheet(styles);

export { Stepper as Component, styles };
export default enhance(Stepper);
