import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableStyles from './table-styles';

function Table({ className, children, size, ...rest }, { styleManager }) {
  const classes = styleManager.render(TableStyles);
  const usedClassName = classNames(classes.table, size, className);

  return (
    <table {...rest} className={usedClassName}>
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

Table.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};


export default Table;
