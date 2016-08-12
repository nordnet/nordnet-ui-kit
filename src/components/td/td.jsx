import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './td.scss';

function Td({
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
  const classes = classNames('td', {
    'td--xs': size === 'xs',
    'td--sm': size === 'sm',
    'td--md': size === 'md',
    'td--lg': size === 'lg',
    'td--mono': mono,
    'td--success': modifier === 'success',
    'td--warning': modifier === 'warning',
    'td--danger': modifier === 'danger',
    'td--highlight-success': highlight === 'success',
    'td--highlight-warning': highlight === 'warning',
    'td--highlight-danger': highlight === 'danger',
    'td--border': border,
    'td--border-top': borderTop,
    'td--border-right': borderRight,
    'td--border-bottom': borderBottom,
    'td--border-left': borderLeft,
  }, className);

  return <td { ...rest } className={ classes }>{ children }</td>;
}

Td.defaultProps = {
  mono: false,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
};

Td.propTypes = {
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

export default Td;
