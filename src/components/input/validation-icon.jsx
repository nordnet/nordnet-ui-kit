import React from 'react';
import variables from '../../utilities/variables';
import IconCheckmark from '../icon/icons/checkmark';
import IconExclamationPoint from '../icon/icons/exclamationPoint';

function ValidationIcon(props) {
  const iconClass = 'input__validation-icon';

  if (props.hasSuccess) {
    return <IconCheckmark className={iconClass} stroke={variables.colorSuccess} />;
  }

  if (props.hasWarning) {
    return <IconExclamationPoint className={iconClass} stroke={variables.colorWarning} />;
  }

  if (props.hasError) {
    return <IconExclamationPoint className={iconClass} stroke={variables.colorDanger} />;
  }

  return <span />; // Stateless functions in React 0.14.X do not support returning null
}

ValidationIcon.propTypes = {
  hasSuccess: React.PropTypes.bool,
  hasWarning: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
};

export default ValidationIcon;
