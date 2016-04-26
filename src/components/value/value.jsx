import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './value.scss';

export default function Value(props) {
  const {
    label,
    value,
  } = props;
  const classes = classNames('value');
  const id = props.id || label;

  return (
    <div className={ classes }>
      <label className="value__label" htmlFor={ id }>{ label }</label>
      <span className="value__value" id={ id } >{ value }</span>
    </div>
  );
}

Value.defaultProps = {
  label: '',
  value: '',
};

Value.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
};
