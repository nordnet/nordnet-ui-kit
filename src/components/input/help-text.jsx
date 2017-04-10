import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';

const styleSheet = createStyleSheet('HelpText', (theme) => {
  const { palette } = theme;

  return {
    'help-text': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      textAlign: 'right',
      bottom: '-16px',
      fontSize: '12px',
      color: palette.text.muted,
      '&.help-text--has-success': { color: palette.variant.success },
      '&.help-text--has-warning': { color: palette.variant.warning },
      '&.help-text--has-error': { color: palette.variant.danger },
    },
  };
});

function HelpText(props, { styleManager }) {
  const { hasSuccess, hasWarning, hasError } = props;
  const classes = styleManager.render(styleSheet);
  const className = classNames(['help-text', classes['help-text']], {
    'help-text--has-success': hasSuccess,
    'help-text--has-warning': hasWarning,
    'help-text--has-error': hasError,
    'help-text--checkbox-radio': props.isCheckbox || props.isRadio,
  });

  if (props.children) {
    return <span className={className}>{ props.children }</span>;
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

HelpText.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default HelpText;
