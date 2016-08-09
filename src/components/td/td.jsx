import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './td.scss';

function Td(props) {
  const { className, children, size, mono, ...rest } = props;
  const classes = classNames('td', {
    [`td--${size}`]: size,
    'td--mono': mono,
  }, className);

  return <td { ...rest } className={ classes }>{ children }</td>;
}

Td.defaultProps = {
  mono: false,
};

Td.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  mono: PropTypes.bool,
};

export default Td;
