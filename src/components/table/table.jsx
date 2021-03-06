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
  tableLayoutFixed,
  maxHeight,
  theme, // eslint-disable-line react/prop-types
  sheet, // eslint-disable-line react/prop-types
  ...rest
}) {
  const usedClassName = classNames(
    classes.table,
    size,
    { [classes.tableLayoutFixed]: tableLayoutFixed },
    className,
  );

  const rootStyle = Object.assign(maxHeight ? { maxHeight, overflowY: 'scroll' } : {});

  return (
    <div className={classes.root} style={rootStyle}>
      <table {...rest} style={style} className={usedClassName}>
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
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  tableLayoutFixed: PropTypes.bool,
  maxHeight: PropTypes.number,
};

Table.defaultProps = {
  size: 'sm',
  minWidth: 700,
  tableLayoutFixed: false,
  maxHeight: null,
};

export default injectSheet(styles, { injectTheme: true })(Table);
