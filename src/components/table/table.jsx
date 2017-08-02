import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import styles from './table-styles';

function Table({
  classes,
  className,
  children,
  size,
  minWidth,
  style,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
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
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  minWidth: PropTypes.number,
  style: PropTypes.object,
};

Table.defaultProps = {
  minWidth: 700,
};

export default injectSheet(styles)(Table);
