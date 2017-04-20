import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Radio(props) {
  const { checked, disabled } = props;

  const classes = classNames('radio', {
    'radio--is-checked': checked,
    'radio--is-disabled': disabled,
  }, props.className);

  return <span className={classes} />;
}

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Radio;
