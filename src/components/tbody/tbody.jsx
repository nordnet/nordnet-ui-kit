import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './tbody.scss';

function Tbody(props) {
  const { className, children, size, colorAlternateRows, ...rest } = props;
  const classes = classNames('tbody', {
    [`tbody--${size}`]: size,
    'tbody--alternate-rows': colorAlternateRows,
  }, className);

  return (
    <tbody { ...rest } className={ classes }>
      { children }
    </tbody>
  );
}

Tbody.defaultProps = {
  colorAlternateRows: true,
};

Tbody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  colorAlternateRows: PropTypes.bool,
};

export default Tbody;
