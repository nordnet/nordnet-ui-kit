import React, { PropTypes } from 'react';
import classNames from 'classnames';
import assign from 'lodash.assign';
import rem from '../../utilities/rem';
import './tbody.scss';

function Tbody({
  className,
  children,
  style,
  size,
  colorAlternateRows,
  maxHeight,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  ...rest,
}) {
  const classes = classNames('tbody', {
    'tbody--xs': size === 'xs',
    'tbody--sm': size === 'sm',
    'tbody--md': size === 'md',
    'tbody--lg': size === 'lg',
    'tbody--alternate-rows': colorAlternateRows,
    'tbody--scroll': maxHeight,
    'tbody--border': border,
    'tbody--border-top': borderTop,
    'tbody--border-right': borderRight,
    'tbody--border-bottom': borderBottom,
    'tbody--border-left': borderLeft,
  }, className);

  const tbodyStyle = assign(maxHeight ? { maxHeight: rem(`${maxHeight}px`) } : {}, style);

  return (
    <tbody { ...rest } className={ classes } style={ tbodyStyle }>
      { children }
    </tbody>
  );
}

Tbody.defaultProps = {
  colorAlternateRows: true,
  border: false,
  borderTop: false,
  borderRight: false,
  borderBottom: false,
  borderLeft: false,
};

Tbody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  colorAlternateRows: PropTypes.bool,
  /** Unitless pixel value */
  maxHeight: PropTypes.number,
  border: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderBottom: PropTypes.bool,
  borderLeft: PropTypes.bool,
};

export default Tbody;
