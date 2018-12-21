import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Table, Pagination, Button } from '../../';
import TableHead from './table-head/table-head';
import TableBody from './table-body/table-body';
import styles from './table-content-wrapper.styles';
import { colShape, sortingLocalizationShape } from './shapes';

class TableContentWrapper extends Component {
  generateNode = (url, children, rest) => {
    const { paginationNode } = this.props;
    return (
      <Button to={url} {...rest} node={paginationNode}>
        {children}
      </Button>
    );
  };

  render() {
    const {
      classes,
      captionVisibleMobile,
      captionVisibleDesktop,
      pageSize,
      page,
      sortField,
      sortOrder,
      nrResults,
      columns,
      pageChangeHandler,
      sortHandler,
      rowData,
      rowKeyPath,
      loading,
      localization,
      renderTd,
      urlGenerator,
      disablePagination,
      trProps,
      borderlessRows,
    } = this.props;
    const captionHidden = !captionVisibleMobile && !captionVisibleDesktop;
    const captionVisible = captionVisibleMobile || captionVisibleDesktop;

    if (typeof loading === 'undefined') {
      return null;
    }

    if (rowData.length > 0) {
      return (
        <div className={classes.root}>
          <Table tableLayoutFixed>
            <caption
              className={cn({
                [classes.screenReadersOnly]: captionHidden,
                [classes.caption]: captionVisible,
                'smart-table__caption': captionVisible,
                [classes.captionMobileHidden]: !captionVisibleMobile && captionVisibleDesktop,
                [classes.captionDesktopHidden]: captionVisibleMobile && !captionVisibleDesktop,
              })}
            >
              {localization.caption}
            </caption>
            <TableHead
              columns={columns}
              sortField={sortField}
              sortOrder={sortOrder}
              sortHandler={sortHandler}
              localization={localization.sorting}
            />
            <TableBody
              columns={columns}
              rowData={rowData}
              loading={loading}
              renderTd={renderTd}
              expandLabel={localization.expand}
              rowKeyPath={rowKeyPath}
              trProps={trProps}
              borderlessRows={borderlessRows}
            />
          </Table>
          {!disablePagination && (
            <Pagination
              total={nrResults}
              limit={pageSize}
              selected={page}
              anchors={1}
              selectedSiblings={2}
              changeHandler={pageChangeHandler}
              buttonTextPrevious={localization.prevButton}
              buttonTextNext={localization.nextButton}
              getNode={this.generateNode}
              urlGenerator={urlGenerator}
            />
          )}
        </div>
      );
    }
    return <div className={classes.feedback}>{localization.noData}</div>;
  }
}

TableContentWrapper.propTypes = {
  classes: PropTypes.shape().isRequired,
  captionVisibleMobile: PropTypes.bool,
  captionVisibleDesktop: PropTypes.bool,
  columns: PropTypes.arrayOf(colShape),
  pageSize: PropTypes.number,
  nrResults: PropTypes.number,
  rowData: PropTypes.arrayOf(PropTypes.shape()),
  rowKeyPath: PropTypes.string.isRequired,
  page: PropTypes.number,
  sortField: PropTypes.string,
  sortOrder: PropTypes.string,
  pageChangeHandler: PropTypes.func.isRequired,
  sortHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  localization: PropTypes.shape({
    noData: PropTypes.string.isRequired,
    nextButton: PropTypes.string.isRequired,
    prevButton: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    expand: PropTypes.string.isRequired,
    sorting: sortingLocalizationShape,
  }).isRequired,
  renderTd: PropTypes.func,
  paginationNode: PropTypes.func,
  urlGenerator: PropTypes.func,
  disablePagination: PropTypes.bool,
  trProps: PropTypes.shape(),
  borderlessRows: PropTypes.arrayOf(PropTypes.number),
};

TableContentWrapper.defaultProps = {
  columns: [],
  captionVisibleMobile: false,
  captionVisibleDesktop: false,
  rowData: [],
  borderlessRows: [],
  pageSize: 10,
  nrResults: 0,
  page: 1,
  sortField: '',
  sortOrder: 'desc',
  loading: null,
  paginationNode: null,
  urlGenerator: () => null,
  renderTd: ({ col, rowData }) => (col.useBase ? rowData[col.baseKey] : rowData[col.baseKey][col.key]),
  disablePagination: false,
};

export { TableContentWrapper as Component, styles };
export default injectSheet(styles)(TableContentWrapper);
