import PropTypes from 'prop-types';
import React from 'react';

function Label(props) {
  const { label, id } = props;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-for
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
