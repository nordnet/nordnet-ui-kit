import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Reactable from 'reactable';
import './table.scss';

function Table(props) {
  const { className, children, fullWidth, size, colorAlternateRows, hideHeader, ...rest } = props;
  const classes = classNames('table', {
    'table--full-width': fullWidth,
    'table--alternate-rows': colorAlternateRows,
    'table--hide-header': hideHeader,
  }, `table--${size}`, className);

  return (
    <div className={ classes }>
      <Reactable.Table { ...rest }>{ children }</Reactable.Table>
    </div>
  );
}

Table.defaultProps = {
  fullWidth: true,
  size: 'sm',
  colorAlternateRows: true,
  hideHeader: false,
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  colorAlternateRows: PropTypes.bool,
  hideHeader: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Table;
