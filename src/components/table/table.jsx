import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './table.scss';

function Table(props) {
  const { className, children, fullWidth, size, hideHeader, ...rest } = props;
  const classes = classNames('table', {
    [`table--${size}`]: size,
    'table--full-width': fullWidth,
    'table--hide-header': hideHeader,
  }, className);

  return (
    <table { ...rest } className={ classes }>
      { children }
    </table>
  );
}

Table.defaultProps = {
  fullWidth: true,
  size: 'sm',
  hideHeader: false,
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  hideHeader: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Table;
