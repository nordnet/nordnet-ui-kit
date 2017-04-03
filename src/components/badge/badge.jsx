import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './badge.scss';

function Badge({
  modifier,
  children,
  className,
  ...rest // eslint-disable-line comma-dangle,
}) {
  const classes = classNames('badge', {
    'badge--success': modifier === 'success',
    'badge--warning': modifier === 'warning',
    'badge--danger': modifier === 'danger',
  }, className);

  return (
    <span { ...rest } className={ classes }>{ children }</span>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
};

export default Badge;
