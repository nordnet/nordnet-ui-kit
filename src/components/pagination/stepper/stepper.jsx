import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button } from '../../../';
import ButtonNode from '../button-node';
import styles from './stepper-styles';

const Stepper = ({ classes, disabled, clickHandler, children, url, getNode }) => {
  const stepperProps = { className: classes.button, onClick: clickHandler, variant: 'link', modifier: 'action' };

  return (
    <ButtonNode node={Button} getNode={getNode} url={url} disabled={disabled} defaultProps={stepperProps}>
      {children}
    </ButtonNode>
  );
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
