import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './tr.scss';

function Tr(props) {
  const { className, children, size, ...rest } = props;
  const classes = classNames('tr', {
    [`tr--${size}`]: size,
  }, className);

  return (
    <tr { ...rest } className={ classes }>
      { children }
    </tr>
  );
}

Tr.defaultProps = {};

Tr.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Tr;
