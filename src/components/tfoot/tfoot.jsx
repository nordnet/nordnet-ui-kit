import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './tfoot.scss';

function Tfoot(props) {
  const { className, children, size, ...rest } = props;
  const classes = classNames('tfoot', {
    'tfoot--xs': size === 'xs',
    'tfoot--sm': size === 'sm',
    'tfoot--md': size === 'md',
    'tfoot--lg': size === 'lg',
  }, className);

  return <tfoot {...rest} className={classes}>{ children }</tfoot>;
}

Tfoot.defaultProps = {};

Tfoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Tfoot;
