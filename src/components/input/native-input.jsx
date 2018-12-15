import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const NativeInput = ({ id, value, placeholder, label, type, onFocus, onBlur, onChange, className, ...rest }) => {
  const Tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <Tag
      className={cn('input__element', `input__element--${type}`, className)}
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
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, PropTypes.object]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NativeInput;
