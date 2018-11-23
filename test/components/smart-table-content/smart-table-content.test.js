import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as SmartTableContent, styles } from '../../../src/components/smart-table-content/smart-table-content';
import TableHead from '../../../src/components/smart-table-content/table-head/table-head';
import TableBody from '../../../src/components/smart-table-content/table-body/table-body';
import Table from '../../../src/components/table';
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
  leftButtonsExperiment: false,
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

const shallowComponent = customProps => shallow(<SmartTableContent {...defaultProps} {...customProps} />);
describe('<SmartTableContent />', () => {
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
