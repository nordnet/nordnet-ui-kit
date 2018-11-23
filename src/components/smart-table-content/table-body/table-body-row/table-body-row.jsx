import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Tr, Td, Icon } from '../../../../';
import { colShape } from '../../shapes';
import styles from './table-body-row.styles';

class TableBodyRow extends Component {
  state = {
    collapsed: true,
  };

  expandRowHandler = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { classes, rowData, columns, getTdContent, expandLabel } = this.props;
    const { collapsed } = this.state;

    return (
      <Tr className={cn({ [classes.expanded]: !collapsed }, classes.row)}>
        {columns.map(col => (
          <Td
            className={cn({
              [classes.firstMobileRow]: col.firstMobileRow,
            })}
            key={col.key || col.baseKey}
            align={col.align}
            borderBottom
            title={col.headerLabel}
            collapsed={!col.firstMobileRow && collapsed}
            onClick={col.firstMobileRow && this.expandRowHandler}
            {...col.responsiveProps}
          >
            {getTdContent(col, rowData)}
          </Td>
        ))}
        <Td
          className={classes.firstMobileRow}
          align="right"
          flexOrder={4}
          flexBasisMobile={10}
          ellipsis={false}
          borderBottom
          hiddenOnDesktop
        >
          <button className={classes.expander} onClick={this.expandRowHandler} aria-expanded={!collapsed} type="button">
            <span className={classes.expanderText}>{expandLabel}</span>
            {collapsed ? (
              <Icon.ChevronDown aria-hidden="true" focusable="false" />
            ) : (
              <Icon.ChevronUp aria-hidden="true" focusable="false" />
            )}
          </button>
        </Td>
        <Td borderBottom hiddenOnDesktop flexOrder={8} flexBasisMobile={10} collapsed={collapsed} />
        <Td borderBottom hiddenOnDesktop flexOrder={12} flexBasisMobile={10} collapsed={collapsed} />
        <Td borderBottom hiddenOnDesktop flexOrder={14} flexBasisMobile={25} collapsed={collapsed} />
        <Td borderBottom hiddenOnDesktop flexOrder={17} flexBasisMobile={10} collapsed={collapsed} />
      </Tr>
    );
  }
}

TableBodyRow.propTypes = {
  classes: PropTypes.shape().isRequired,
  columns: PropTypes.arrayOf(colShape).isRequired,
  getTdContent: PropTypes.func.isRequired,
  expandLabel: PropTypes.string.isRequired,
  rowData: PropTypes.shape().isRequired,
};

export default injectSheet(styles)(TableBodyRow);
