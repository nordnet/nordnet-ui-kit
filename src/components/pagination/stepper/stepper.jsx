import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button } from '../../../';
import styles from './stepper-styles';

const getButtonProps = (url, disabled) => {
  if (disabled) {
    return { type: 'button', disabled };
  }

  if (url) {
    return { href: url };
  }

  return { type: 'button' };
};

const Stepper = ({ classes, disabled, clickHandler, children, url, getNode }) => {
  const commonProps = { className: classes.button, onClick: clickHandler, variant: 'link', modifier: 'action' };
  const buttonProps = getButtonProps(url, disabled);
  const defaultProps = { ...commonProps, ...buttonProps };
  const Node = getNode ? getNode(url, children, { ...commonProps }) : <Button {...defaultProps}>{children}</Button>;

  return Node;
};

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  getNode: PropTypes.func,
};

Stepper.defaultProps = {
  url: null,
  getNode: null,
};

const enhance = injectSheet(styles);

export { Stepper as Component, styles };
export default enhance(Stepper);
