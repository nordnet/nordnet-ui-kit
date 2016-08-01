import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Reactable from 'reactable';
import './table.scss';

function Table(props) {
  const { className, fullWidth, size, colorAlternateRows, ...rest } = props;
  const classes = classNames('table', {
    'table--full-width': fullWidth,
    'table--alternat-rows': colorAlternateRows,
  }, `table--${size}`, className);

  return (
    <div className={ classes }>
      <Reactable.Table {...rest}>{ props.children }</Reactable.Table>
    </div>
  );
}

Table.defaultProps = {
  fullWidth: true,
  size: 'sm',
  colorAlternateRows: true,
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  colorAlternateRows: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Table;
