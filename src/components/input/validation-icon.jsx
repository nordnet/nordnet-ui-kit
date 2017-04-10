import React from 'react';
import { Icon } from '../../';
// import variables from '../../utilities/variables';

function ValidationIcon(props) {
  const iconClass = 'input__validation-icon';

  if (props.hasSuccess) {
    return <Icon.Checkmark className={iconClass} />;
  }

  if (props.hasWarning) {
    return <Icon.ExclamationPoint className={iconClass} stroke={'variables.colorWarning'} />;
  }

  if (props.hasError) {
    return <Icon.ExclamationPoint className={iconClass} />;
  }

  return null; // Stateless functions in React 0.14.X do not support returning null
}

ValidationIcon.propTypes = {
  hasSuccess: React.PropTypes.bool,
  hasWarning: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
};

export default ValidationIcon;
