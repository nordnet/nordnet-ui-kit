import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import TableStyles from './table-styles';

function Table({ className, children, size, minWidth, style, ...rest }, { styleManager }) {
  const classes = styleManager.render(TableStyles);
  const usedClassName = classNames(classes.table, size, className);
  const tableStyle = Object.assign({}, { minWidth }, style);

  return (
    <div className={classes.root}>
      <table {...rest} style={tableStyle} className={usedClassName}>
        {children}
      </table>
    </div>
  );
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  minWidth: PropTypes.number,
  style: PropTypes.object,
};

Table.defaultProps = {
  minWidth: 700,
};

Table.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Table;
