import React from 'react';
import { Icon } from '../../';
import color from '../../styles/color';

function ValidationIcon(props) {
  const iconClass = 'input__validation-icon';

  if (props.hasSuccess) {
    return <Icon.Checkmark className={iconClass} stroke={color.green} />;
  }

  if (props.hasWarning) {
    return <Icon.ExclamationPoint className={iconClass} stroke={color.yellow} />;
  }

  if (props.hasError) {
    return <Icon.ExclamationPoint className={iconClass} stroke={color.red} />;
  }

  return null;
}

ValidationIcon.propTypes = {
  hasSuccess: React.PropTypes.bool,
  hasWarning: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
};

export default ValidationIcon;
