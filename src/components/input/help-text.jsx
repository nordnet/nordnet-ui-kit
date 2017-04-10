import React, { PropTypes } from 'react';
import classNames from 'classnames';
// TODO: Move SCSS into JSS
// import './help-text.scss';

function HelpText(props) {
  const { hasSuccess, hasWarning, hasError } = props;
  const classes = classNames('help-text', {
    'help-text--has-success': hasSuccess,
    'help-text--has-warning': hasWarning,
    'help-text--has-error': hasError,
    'help-text--checkbox-radio': props.isCheckbox || props.isRadio,
  });

  if (props.children) {
    return <span className={classes}>{ props.children }</span>;
  }

  return null;
}

HelpText.propTypes = {
  children: PropTypes.node,
  hasSuccess: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasError: PropTypes.bool,
  isCheckbox: PropTypes.bool,
  isRadio: PropTypes.bool,
};

export default HelpText;
