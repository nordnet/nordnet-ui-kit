import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
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
    } = this.props;

    if (typeof loading === 'undefined') {
      return null;
    }

    if (rowData.length > 0) {
      return (
        <div className={classes.root}>
          <Table tableLayoutFixed>
            <caption className={classes.screenReadersOnly}>{localization.caption}</caption>
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
            />
          </Table>
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
        </div>
      );
    }
    return <div className={classes.feedback}>{localization.noData}</div>;
  }
}

TableContentWrapper.propTypes = {
  classes: PropTypes.shape().isRequired,
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
};

TableContentWrapper.defaultProps = {
  columns: [],
  rowData: [],
  pageSize: 10,
  nrResults: 0,
  page: 1,
  sortField: '',
  sortOrder: 'desc',
  loading: null,
  paginationNode: null,
  urlGenerator: () => null,
  renderTd: ({ col, rowData }) => (col.useBase ? rowData[col.baseKey] : rowData[col.baseKey][col.key]),
};

export { TableContentWrapper as Component, styles };
export default injectSheet(styles)(TableContentWrapper);