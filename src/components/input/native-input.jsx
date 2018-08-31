import React from 'react';
import PropTypes from 'prop-types';

const NativeInput = ({ id, value, placeholder, label, type, onFocus, onBlur, onChange, ...rest }) => {
  const className = `input__element input__element--${type}`;
  const Tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <Tag
      className={className}
      id={id}
      type={type}
      placeholder={placeholder || label}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

NativeInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NativeInput;
