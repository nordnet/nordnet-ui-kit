import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon/icon';
import variables from '../../utilities/variables';

function Checkbox(props) {
  const { checked, disabled } = props;

  const classes = classNames('checkbox', {
    'checkbox--is-checked': checked,
    'checkbox--is-disabled': disabled,
  }, props.className);

  const icon = (<Icon
    type="checkmark"
    stroke={ disabled ? variables.colorDisabled : '#FFFFFF' }
    style={{ display: 'block' }}
  />);

  return (
    <span className={ classes }>
      { checked ? icon : <span /> }
    </span>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Checkbox;
