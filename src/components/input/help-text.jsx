import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const styles = theme => {
  const { palette } = theme;

  return {
    'help-text': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      textAlign: 'right',
      bottom: '-16px',
      color: palette.gray0,
      ...theme.typography.tertiary(),
    },
    success: { color: palette.positive },
    warning: { color: palette.index },
    error: { color: palette.negative },
  };
};

function HelpText({ classes, children, hasSuccess, hasWarning, hasError, isCheckbox, isRadio }) {
  const className = classNames(['help-text', classes['help-text']], {
    [classes.success]: hasSuccess,
    [classes.warning]: hasWarning,
    [classes.error]: hasError,
    'help-text--checkbox-radio': isCheckbox || isRadio,
  });

  if (children) {
    return <span className={className}>{children}</span>;
  }

  return null;
}

HelpText.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  hasSuccess: PropTypes.bool,
  hasWarning: PropTypes.bool,
  hasError: PropTypes.bool,
  isCheckbox: PropTypes.bool,
  isRadio: PropTypes.bool,
};

const Component = HelpText;

export { Component, styles };

export default injectSheet(styles)(HelpText);
