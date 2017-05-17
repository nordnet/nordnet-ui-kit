import PropTypes from 'prop-types';
import React from 'react';

function Label(props) {
  const { label, id } = props;

  return (
    <label htmlFor={id} className="input__label">
      {label}
    </label>
  );
}

Label.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

export default Label;
