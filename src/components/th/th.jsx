import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './th.scss';

function Th(props) {
  const { className, children, size, mono, ...rest } = props;
  const classes = classNames('th', {
    [`th--${size}`]: size,
    'th--mono': mono,
  }, className);

  return (
    <th { ...rest } className={ classes }>
      { children }
    </th>
  );
}

Th.defaultProps = {
  mono: false,
};

Th.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  mono: PropTypes.bool,
};

export default Th;
