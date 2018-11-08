import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button } from '../../../';
import styles from './stepper-styles';

const getButtonProps = (node, url, disabled) => {
  if (disabled) {
    return { type: 'button', disabled };
  }

  if (node && url) {
    return { node, to: url };
  }

  if (url) {
    return { href: url };
  }

  return { type: 'button' };
};

const Stepper = ({ classes, disabled, clickHandler, children, url, node }) => {
  const buttonProps = getButtonProps(node, url, disabled);

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
  node: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Stepper.defaultProps = {
  url: null,
  node: null,
};

const enhance = injectSheet(styles);

export { Stepper as Component, styles };
export default enhance(Stepper);
