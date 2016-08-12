import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './th.scss';

function Th({
  className,
  children,
  size,
  mono,
  modifier,
  highlight,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  ...rest,
}) {
  const classes = classNames('th', {
    'th--xs': size === 'xs',
    'th--sm': size === 'sm',
    'th--md': size === 'md',
    'th--lg': size === 'lg',
    'th--mono': mono,
    'th--success': modifier === 'success',
    'th--warning': modifier === 'warning',
    'th--danger': modifier === 'danger',
    'th--highlight-success': highlight === 'success',
    'th--highlight-warning': highlight === 'warning',
    'th--highlight-danger': highlight === 'danger',
    'th--border': border,
    'th--border-top': borderTop,
    'th--border-right': borderRight,
    'th--border-bottom': borderBottom,
    'th--border-left': borderLeft,
  }, className);

  return (
    <th { ...rest } className={ classes }>
      { children }
    </th>
  );
}

Th.defaultProps = {
  mono: false,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
};

Th.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  mono: PropTypes.bool,
  modifier: PropTypes.oneOf(['success', 'warning', 'danger']),
  highlight: PropTypes.oneOf(['success', 'warning', 'danger']),
  border: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool,
};

export default Th;
