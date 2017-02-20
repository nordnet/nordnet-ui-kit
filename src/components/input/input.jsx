import React, { PropTypes } from 'react';
import InputDefault from './input-default';
import InputSelect from './input-select';
import InputCheckboxRadio from './input-checkbox-radio';

function Input(props) {
  switch (props.type) {
    case 'select':
      return <InputSelect { ...props } />;
    case 'checkbox':
      return <InputCheckboxRadio { ...props } />;
    case 'radio':
      return <InputCheckboxRadio { ...props } />;
    default:
      return <InputDefault { ...props } />;
  }
}

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
