import React from 'react';

function Label(props) {
  const { label, id } = props;

  return (
    <label htmlFor={id} className="input__label">
      { label }
    </label>
  );
}

Label.propTypes = {
  label: React.PropTypes.string,
  id: React.PropTypes.string,
};

export default Label;
