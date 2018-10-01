import PropTypes from 'prop-types';
import React from 'react';

function Label(props) {
  const { label, children } = props;

  const Tag = label ? 'label' : React.Fragment;

  return (
    <Tag>
      <span className="input__label">{label}</span>
      {children}
    </Tag>
  );
}

Label.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
