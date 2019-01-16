import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';

const SelectOption = ({ label, value, optionKey, options, ...rest }) => {
  if (options) {
    const key = optionKey || kebabCase(label); // Assumes optgroup label is unique
    return (
      <optgroup {...rest} key={key} label={label}>
        {options.map(option => (
          <SelectOption key={option.key || kebabCase(option.label)} {...option} />
        ))}
      </optgroup>
    );
  }

  return (
    <option {...rest} value={value}>
      {label}
    </option>
  );
};

SelectOption.propTypes = {
  label: PropTypes.string.isRequired,
  optionKey: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
    }),
  ),
};

export default SelectOption;
