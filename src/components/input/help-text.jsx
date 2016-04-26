import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './help-text.scss';

function HelpText(props) {
  const { hasSuccess, hasWarning, hasError } = props;
  const classes = classNames('help-text', {
    'help-text--has-success': hasSuccess,
    'help-text--has-warning': hasWarning,
    'help-text--has-error': hasError,
  });

  if (props.children) {
    return <span className={ classes }>{ props.children }</span>;
  }

  return <span />; // Stateless functions in React 0.14.X do not support returning null
}

HelpText.propTypes = {
  children: PropTypes.node,
  hasSuccess: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default HelpText;
