import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Icon } from '../../';
import color from '../../styles/color';

function Checkbox(props) {
  const { checked, disabled } = props;

  const classes = classNames('checkbox', {
    'checkbox--is-checked': checked,
    'checkbox--is-disabled': disabled,
  }, props.className);

  const icon = (<Icon.Checkmark
    stroke={color.white}
    style={{ display: 'block' }}
  />);

  return (
    <span className={classes}>
      { checked ? icon : null }
    </span>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Checkbox;
