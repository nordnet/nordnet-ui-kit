import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Tr, Td, Icon } from '../../../../';
import { colShape } from '../../shapes';
import styles from './table-body-row.styles';

export const convertOrder = (origin, spacers) => {
  if (origin >= spacers[0]) {
    return convertOrder(origin + 1, spacers.slice(1));
  }
  return origin;
};

const convertBasis = (responsiveProps, spacers) => ({
  ...responsiveProps,
  flexBasisMobile: responsiveProps.flexBasisMobile / 100 * 90,
  flexOrder: convertOrder(responsiveProps.flexOrder, spacers),
});

const compareResponsiveOrder = (a, b) => a.responsiveProps.flexOrder - b.responsiveProps.flexOrder;

const findSpacers = sortedColumns => {
  let curRowWidth = 0;
  const spacers = [];
  for (let i = 0; i < sortedColumns.length; i += 1) {
    curRowWidth += sortedColumns[i].responsiveProps.flexBasisMobile;
    if (curRowWidth >= 100) {
      spacers.push(i + 2 + spacers.length);
      curRowWidth = 0;
    }
  }
  return spacers;
};

class TableBodyRow extends Component {
  state = {
    collapsed: true,
  };

  toggleExpandedRow = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    const { classes, rowData, columns, renderTd, expandLabel } = this.props;
    const { collapsed } = this.state;
    const mobileSortedColumns = columns.filter(col => col.responsiveProps.flexOrder > 0).sort(compareResponsiveOrder);
    const spacers = findSpacers(mobileSortedColumns);

    return (
      <Tr className={cn({ [classes.expanded]: !collapsed }, classes.row)}>
        {columns.map(col => (
          <Td
            className={cn({
              [classes.firstMobileRow]: col.firstMobileRow,
            })}
            key={col.key || col.baseKey || col.padding}
            align={col.align}
            borderBottom
            title={col.headerLabel}
            collapsed={!col.firstMobileRow && collapsed}
            onClick={col.firstMobileRow && this.toggleExpandedRow}
            {...convertBasis(col.responsiveProps, spacers)}
          >
            {renderTd(col, rowData)}
          </Td>
        ))}
        <Td
          className={classes.firstMobileRow}
          align="right"
          flexOrder={spacers.shift()}
          flexBasisMobile={10}
          ellipsis={false}
          borderBottom
          hiddenOnDesktop
        >
          <button className={classes.expander} onClick={this.toggleExpandedRow} aria-expanded={!collapsed} type="button">
            <span className={classes.expanderText}>{expandLabel}</span>
            {collapsed ? (
              <Icon.ChevronDown aria-hidden="true" focusable="false" />
            ) : (
              <Icon.ChevronUp aria-hidden="true" focusable="false" />
            )}
          </button>
        </Td>
        {spacers.map(spacerIdx => (
          <Td
            key={`td-spacer-${spacerIdx}`}
            borderBottom
            hiddenOnDesktop
            flexOrder={spacerIdx}
            flexBasisMobile={10}
            collapsed={collapsed}
          />
        ))}
      </Tr>
    );
  }
}

TableBodyRow.propTypes = {
  classes: PropTypes.shape().isRequired,
  columns: PropTypes.arrayOf(colShape).isRequired,
  renderTd: PropTypes.func.isRequired,
  expandLabel: PropTypes.string.isRequired,
  rowData: PropTypes.shape().isRequired,
};

export default injectSheet(styles)(TableBodyRow);