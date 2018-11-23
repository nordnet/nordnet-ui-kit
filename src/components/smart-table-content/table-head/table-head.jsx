import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import injectSheet from 'react-jss';
import { Th, Tr, Thead, Icon } from '../../../';
import styles from './table-head.styles';
import { colShape, sortingLocalizationShape } from '../shapes';

const initialSortOrder = 'desc';
const reverseSortOrder = 'asc';

const readableSort = {
  asc: 'ascending',
  desc: 'descending',
};

const nextSort = sortOrder => (sortOrder === initialSortOrder ? reverseSortOrder : initialSortOrder);
class TableHead extends Component {
  getAriaSort = key => {
    const { sortOrder } = this.props;
    return this.isSortedOn(key) ? readableSort[sortOrder] : 'none';
  };

  getNextSortDir = key => {
    const { sortOrder } = this.props;
    return this.isSortedOn(key) ? nextSort(sortOrder) : initialSortOrder;
  };

  isSortedOn = key => {
    const { sortField } = this.props;
    return sortField === key;
  };

  renderIcon(key) {
    const { classes, sortOrder } = this.props;

    if (this.isSortedOn(key)) {
      return sortOrder === initialSortOrder ? (
        <Icon.ArrowDownStraight width={10} height={10} className={classes.icon} />
      ) : (
        <Icon.ArrowUpStraight width={10} height={10} className={classes.icon} />
      );
    }
    return <Icon.ArrowDownStraight width={10} height={10} className={classes.icon} />;
  }

  renderTableHeadInner(headerLabel, align, sortable, key) {
    const { classes, sortHandler, sortField, sortOrder } = this.props;

    const iconBefore = sortable && align === 'right';
    const iconAfter = sortable && align === 'left';

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <span
        className={cn(classes.columnHeaderInner, {
          [classes.columnHeaderSorted]: this.isSortedOn(key),
        })}
        onClick={e => {
          if (!sortable) {
            sortHandler({ key: sortField, nextSortDir: sortOrder, readableSort: readableSort[sortOrder] }, 'NOT_SORTABLE', e);
          }
        }}
      >
        {iconBefore && this.renderIcon(key)}
        {headerLabel}
        {(!align || iconAfter) && this.renderIcon(key)}
      </span>
    );
  }

  renderDynamicColumns() {
    const { classes, columns, sortHandler, localization } = this.props;

    return columns.map(col => {
      if (col.responsiveProps && col.responsiveProps.hiddenOnDesktop) {
        return null;
      }

      const nextSortDir = this.getNextSortDir(col.key || col.baseKey);
      const readableNextSortDir = nextSortDir === initialSortOrder ? localization[initialSortOrder] : localization[reverseSortOrder];
      const tableHeadInner = this.renderTableHeadInner(col.headerLabel, col.align, col.sortable, col.key || col.baseKey);

      return (
        <Th
          key={col.key || col.baseKey}
          width={col.width}
          align={col.align}
          aria-sort={this.getAriaSort(col.key || col.baseKey)} // 'ascending'|'descending'|'none'
          scope="col"
          role="columnheader"
          unstyledChild
        >
          <span className={cn({ [classes.screenReadersOnly]: col.hideHeaderLabel })}>
            {!col.sortable ? (
              tableHeadInner
            ) : (
              <button
                variant="link"
                className={classes.button}
                type="button"
                aria-label={localization.ariaLabel({
                  field: col.headerLabel,
                  dir: readableNextSortDir,
                })}
                onClick={e => {
                  sortHandler({ key: col.key || col.baseKey, nextSortDir, readableSort: readableSort[nextSortDir] }, 'SORT_CHANGED', e);
                }}
              >
                {tableHeadInner}
              </button>
            )}
          </span>
        </Th>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Thead className={classes.root}>
        <Tr>{this.renderDynamicColumns()}</Tr>
      </Thead>
    );
  }
}

TableHead.propTypes = {
  classes: PropTypes.shape().isRequired,
  columns: PropTypes.arrayOf(colShape).isRequired,
  sortField: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf(['', initialSortOrder, reverseSortOrder]).isRequired,
  sortHandler: PropTypes.func.isRequired,
  localization: sortingLocalizationShape.isRequired,
};

export { TableHead as Component, styles };
export default injectSheet(styles)(TableHead);
