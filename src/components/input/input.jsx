import PropTypes from 'prop-types';
import React from 'react';
import InputDefault from './input-default';
import InputSelect from './input-select';
import InputCheckboxRadio from './input-checkbox-radio';

function Input(props) {
  switch (props.type) {
    case 'select':
      return <InputSelect {...props} />;
    case 'checkbox':
    case 'radio':
      return <InputCheckboxRadio {...props} />;
    default:
      return <InputDefault {...props} />;
  }
}

/* eslint-disable react/no-unused-prop-types */
Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  /** Needs to be a valid input type */
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.array, PropTypes.object]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  /** Only used when type === textarea */
  lineCount: PropTypes.number,
  /** Manipulates the value of the input, eg. removing unsupported characters from number inputs */
  valueFormatter: PropTypes.func,
  hasSuccess: PropTypes.bool,
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  helpText: PropTypes.node,
  leftAddon: PropTypes.node,
  rightAddon: PropTypes.node,
};
/* eslint-enable react/no-unused-prop-types */

Input.defaultProps = {
  type: 'text',
  variant: 'primary',
};

export { Input as Component };
export default Input;
