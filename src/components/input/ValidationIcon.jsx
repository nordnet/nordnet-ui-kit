import React from 'react';
import Icon from '../icon/icon';
import variables from '../../utilities/variables';

function ValidationIcon(props) {
  const iconClass = 'input__validation-icon';

  if (props.hasSuccess) {
    return <Icon className={ iconClass } type="checkmark" />;
  }

  if (props.hasWarning) {
    return <Icon className={ iconClass } type="exclamationPoint" stroke={ variables.colorWarning } />;
  }

  if (props.hasError) {
    return <Icon className={ iconClass } type="exclamationPoint" />;
  }

  return <span />; // Stateless functions do not support returning null, see https://github.com/facebook/react/issues/5355
}

ValidationIcon.propTypes = {
  hasSuccess: React.PropTypes.bool,
  hasWarning: React.PropTypes.bool,
  hasError: React.PropTypes.bool,
};

export default ValidationIcon;
