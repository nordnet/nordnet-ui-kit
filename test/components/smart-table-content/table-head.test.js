import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import Tr from '../../../src/components/tr';
import Th from '../../../src/components/th';
import ArrowDownStraight from '../../../src/components/icon/icons/arrowDownStraight';
import ArrowUpStraight from '../../../src/components/icon/icons/arrowUpStraight';
import { Component as TableHead, styles } from '../../../src/components/smart-table-content/TableHead/TableHead';

const classes = mockClasses(styles);

const defaultColumn = {
  key: 'name',
  baseKey: 'instrument_info',
  headerLabel: 'Stock',
  sortable: true,
  align: 'left',
  type: 'string',
  responsiveProps: {},
};

const defaultProps = {
  classes,
  columns: [defaultColumn, { ...defaultColumn, sortable: false }],
  sortField: '',
  sortOrder: '',
  sortHandler: () => {},
  localization: {
    asc: 'ascending',
    desc: 'descending',
    ariaLabel: () => '',
  },
};

const shallowComponent = customProps => shallow(<TableHead {...defaultProps} {...customProps} />);
describe('<TableHead />', () => {
  it('component should have a Tr', () => {
    const component = shallowComponent();
    const actual = component.find(Tr).length;

    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('component should have Ths', () => {
    const component = shallowComponent();
    const actual = component.find(Th).length;
    const expected = defaultProps.columns.length;
    expect(actual).to.equal(expected);
  });

  it('Th should have a button', () => {
    const component = shallowComponent();
    const actual = component.find(Th).find('button').length;
    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('Th should not have a button', () => {
    const component = shallowComponent({
      columns: [
        {
          ...defaultColumn,
          sortable: false,
        },
      ],
    });
    const actual = component.find(Th).find('button').length;

    const expected = 0;
    expect(actual).to.equal(expected);
  });

  it('Th should have aria-sort: none as default', () => {
    const component = shallowComponent();
    const actual = component
      .find(Th)
      .first()
      .props()['aria-sort'];

    const expected = 'none';
    expect(actual).to.equal(expected);
  });

  it('Th should have aria-sort: ascending', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
      sortField: 'name',
      sortOrder: 'asc',
    });
    const actual = component.find(Th).props()['aria-sort'];

    const expected = 'ascending';
    expect(actual).to.equal(expected);
  });

  it('Th should have aria-sort: descending', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
      sortField: 'name',
      sortOrder: 'desc',
    });
    const actual = component.find(Th).props()['aria-sort'];

    const expected = 'descending';
    expect(actual).to.equal(expected);
  });

  it('Th should have aria-sort: none', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
      sortField: 'isin',
      sortOrder: 'asc',
    });
    const actual = component.find(Th).props()['aria-sort'];

    const expected = 'none';
    expect(actual).to.equal(expected);
  });

  it('Button should handle click', () => {
    const spy = sinon.spy();
    const component = shallowComponent({
      columns: [defaultColumn],
      sortHandler: spy,
    });

    component.find('button').simulate('click');
    const actual = spy.calledOnce;
    expect(actual).to.equal(true);
  });

  it('Should render value in Button', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
    });

    const actual = component
      .find('button')
      .find(`span.${classes.columnHeaderInner}`)
      .childAt(0)
      .text();

    const expected = defaultColumn.headerLabel;
    expect(actual).to.equal(expected);
  });

  it('Should render value in Th', () => {
    const component = shallowComponent({
      columns: [
        {
          ...defaultColumn,
          headerLabel: 'FOO_RANDOM',
        },
      ],
    });
    const actual = component
      .find(Th)
      .find('.columnHeaderInner')
      .text();

    const expected = 'FOO_RANDOM<ArrowDownStraight />';
    expect(actual).to.equal(expected);
  });

  it('Should render arrow down', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
    });
    const actual = component.find('button').find(ArrowDownStraight).length;
    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('Should render arrow up', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
      sortField: 'name',
      sortOrder: 'asc',
    });

    const actual = component.find('button').find(ArrowUpStraight).length;

    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('Should render arrow down if not sorted in this column', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
      sortField: 'isin',
      sortOrder: 'desc',
    });

    const actual = component.find('button').find(ArrowDownStraight).length;

    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('dont render class if the table is in default state', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
    });

    const actual = component.find(Th).hasClass(classes.columnHeaderSorted);

    const expected = false;
    expect(actual).to.equal(expected);
  });

  it('render class if the table is sorted on this column', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
      sortField: 'name',
      sortOrder: 'asc',
    });

    const actual = component.find('.columnHeaderSorted').length;

    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('dont render class if the table is sorted on another column', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
      sortField: 'isin',
      sortOrder: 'asc',
    });

    const actual = component.find('.columnHeaderSorted').length;

    const expected = 0;
    expect(actual).to.equal(expected);
  });
});
