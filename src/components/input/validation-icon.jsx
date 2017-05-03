import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from '../../';

function ValidationIcon(props, { styleManager }) {
  const iconClass = 'input__validation-icon';

  if (props.hasSuccess) {
    return <Icon.Checkmark className={iconClass} stroke={styleManager.theme.palette.variant.success} />;
  }

  if (props.hasWarning) {
    return <Icon.ExclamationPoint className={iconClass} stroke={styleManager.theme.palette.variant.warning} />;
  }

  if (props.hasError) {
    return <Icon.ExclamationPoint className={iconClass} stroke={styleManager.theme.palette.variant.danger} />;
  }

  return null;
}

ValidationIcon.propTypes = {
  hasSuccess: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasError: PropTypes.bool,
};

ValidationIcon.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default ValidationIcon;
