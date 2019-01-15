import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as TableContentWrapper, styles } from '../../../src/components/table-content-wrapper/table-content-wrapper';
import TableHead from '../../../src/components/table-content-wrapper/table-head/table-head';
import TableBody from '../../../src/components/table-content-wrapper/table-body/table-body';
import Table from '../../../src/components/table/table';
import Pagination from '../../../src/components/pagination';

const classes = mockClasses(styles);

const defaultProps = {
  classes,
  page: 1,
  filters: { exchange_country: ['SE'], exchange_list: ['se:omxs30'] },
  pageChangeHandler: () => {},
  sortHandler: () => {},
  sortField: 'name',
  sortOrder: 'asc',
  rowData: [{ id: 1 }, { id: 2 }, { id: 3 }],
  loading: false,
  localization: {
    expand: 'Expand',
    noData: 'No data for you mister',
    nextButton: 'Next',
    prevButton: 'Previous',
    caption: 'TestTable',
  },
  rowKeyPath: 'id',
};

const shallowComponent = customProps => shallow(<TableContentWrapper {...defaultProps} {...customProps} />);
describe('<TableContentWrapper />', () => {
  it('has a Table', () => {
    const component = shallowComponent();
    const actual = component.find(Table).length;
    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('has a TableHead', () => {
    const component = shallowComponent();
    const actual = component.find(Table).find(TableHead).length;
    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('has a TableBody', () => {
    const component = shallowComponent();
    const actual = component.find(Table).find(TableBody).length;
    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('has pagination', () => {
    const component = shallowComponent();
    const actual = component.find(Pagination).length;
    const expected = 1;
    expect(actual).to.equal(expected);
  });
});
