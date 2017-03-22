import React from 'react';
import Icon from '../icon/icon';
import variables from '../../utilities/variables';

function ValidationIcon(props) {
  const iconClass = 'input__validation-icon';

  if (props.hasSuccess) {
    return <Icon className={iconClass} type="checkmark" />;
  }

  if (props.hasWarning) {
    return <Icon className={iconClass} type="exclamationPoint" stroke={variables.colorWarning} />;
  }

  if (props.hasError) {
    return <Icon className={iconClass} type="exclamationPoint" />;
  }

  return <span />; // Stateless functions in React 0.14.X do not support returning null
}

ValidationIcon.propTypes = {
  hasSuccess: React.PropTypes.bool,
  hasWarning: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
};

export default ValidationIcon;
