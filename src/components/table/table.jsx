import React, { PropTypes } from 'react';
import classNames from 'classnames';
// TODO: Move SCSS into JSS
// import './table.scss';

function Table(props) {
  const { className, children, size, ...rest } = props;
  const classes = classNames('table', {
    'table--xs': size === 'xs',
    'table--sm': size === 'sm',
    'table--md': size === 'md',
    'table--lg': size === 'lg',
  }, className);

  return (
    <table {...rest} className={classes}>
      { children }
    </table>
  );
}

Table.defaultProps = {
  size: 'sm',
};

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

export default Table;
