import React from 'react';
import PropTypes from 'prop-types';

const getElementType = (url, disabled) => {
  if (disabled) {
    return 'button';
  }

  return url ? 'a' : 'button';
};

const getButtonProps = (url, disabled) => {
  if (disabled) {
    return { type: 'button', disabled };
  }

  if (url) {
    return { href: url };
  }

  return { type: 'button' };
};

const ButtonNode = ({ node, defaultProps, getNode, children, url, disabled }) => {
  if (getNode) {
    return getNode(url, children, { ...defaultProps });
  }

  const Default = node || getElementType(url, disabled);
  const buttonProps = getButtonProps(url, disabled);
  const combinedProps = { ...defaultProps, ...buttonProps };

  return <Default {...combinedProps}>{children}</Default>;
};

ButtonNode.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  url: PropTypes.string,
  node: PropTypes.func,
  getNode: PropTypes.func,
  defaultProps: PropTypes.object,
};

ButtonNode.defaultProps = {
  url: null,
  node: null,
  getNode: null,
  defaultProps: {},
};

export default ButtonNode;
