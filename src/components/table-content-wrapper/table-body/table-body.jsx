import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Tbody } from '../../../';
import TableBodyRow from './table-body-row/table-body-row';
import { colShape } from '../shapes';

const TableBody = ({ rowData, columns, renderTd, expandLabel, rowKeyPath }) => (
  <Tbody colorAlternateRows={false}>
    {rowData.map(row => (
      <TableBodyRow key={get(row, rowKeyPath)} rowData={row} columns={columns} renderTd={renderTd} expandLabel={expandLabel} />
    ))}
  </Tbody>
);

TableBody.propTypes = {
  rowData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  rowKeyPath: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(colShape).isRequired,
  renderTd: PropTypes.func.isRequired,
  expandLabel: PropTypes.string.isRequired,
};

export default TableBody;
