import React, { PropTypes } from 'react';
import cn from 'classnames';
import { withThemedStyles } from '../../hocs';

const styles = {
  root: {
    display: 'inline-block',
    fontSize: '12px',
    padding: '2px 8px',
    lineHeight: 1,
    color: ({ theme }) => theme.palette.shades.dark.text.default,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    'background-color': ({ theme }) => theme.palette.variant.primary,
    borderRadius: '10px',
  },
  success: {
    'background-color': ({ theme }) => theme.palette.variant.success,
  },
  warning: {
    'background-color': ({ theme }) => theme.palette.variant.warning,
    color: ({ theme }) => theme.palette.text.default,
  },
  danger: {
    'background-color': ({ theme }) => theme.palette.variant.danger,
  },
};

function Badge({
  classes,
  modifier,
  children,
  className: classNameProp,
  ...rest
}) {
  const className = cn([classes.root], {
    [classes.success]: modifier === 'success',
    [classes.warning]: modifier === 'warning',
    [classes.danger]: modifier === 'danger',
  }, classNameProp);

  return (
    <span {...rest} className={className}>{ children }</span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
};

export default withThemedStyles(styles, Badge);
