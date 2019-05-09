import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withTheme } from 'react-jss';
import { Icon } from '../..';

function Checkbox(props) {
  const { checked, disabled, theme } = props;

  const classes = classNames(
    'checkbox',
    {
      'checkbox--is-checked': checked,
      'checkbox--is-disabled': disabled,
    },
    props.className,
  );

  const icon = <Icon.Checkmark stroke={theme.palette.white} style={{ display: 'block' }} />;

  return <span className={classes}>{checked ? icon : null}</span>;
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.shape(),
};

export { Checkbox as Component };
export default withTheme(Checkbox);
