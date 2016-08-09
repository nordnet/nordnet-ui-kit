import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './tfoot.scss';

function Tfoot(props) {
  const { className, children, size, ...rest } = props;
  const classes = classNames('tfoot', {
    [`tfoot--${size}`]: size,
  }, className);

  return <tfoot { ...rest } className={ classes }>{ children }</tfoot>;
}

Tfoot.defaultProps = {};

Tfoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Tfoot;
