import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import Tr from '../../../src/components/table/tr';
import Th from '../../../src/components/table/th';
import ArrowDownStraight from '../../../src/components/icon/icons/arrowDownStraight';
import ArrowUpStraight from '../../../src/components/icon/icons/arrowUpStraight';
import {
  Component as TableHead,
  styles,
  TableHeadContent,
  TableHeadIcon,
} from '../../../src/components/table-content-wrapper/table-head/table-head';

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

  it('Should render TableHeadContent in Button', () => {
    const component = shallowComponent({
      columns: [defaultColumn],
    });
    const actual = component.find('button').find(TableHeadContent).length;

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
});

describe('<TableHeadIcon />', () => {
  it('arrow should point up if sorted ascending', () => {
    const component = shallow(<TableHeadIcon classes={classes} sortOrder={'asc'} isSortedOn />);
    expect(component.find(ArrowUpStraight).length).to.equal(1);
  });
  it('arrow should point down if sorted descending', () => {
    const component = shallow(<TableHeadIcon classes={classes} sortOrder={'desc'} isSortedOn />);
    expect(component.find(ArrowDownStraight).length).to.equal(1);
  });
  it('arrow should point down if not sorted on', () => {
    const component = shallow(<TableHeadIcon classes={classes} sortOrder={'asc'} isSortedOn={false} />);
    expect(component.find(ArrowDownStraight).length).to.equal(1);
  });
});

describe('<TableHeadContent />', () => {
  const props = {
    colSpec: {
      headerLabel: 'TestLabel',
      align: 'left',
      sortable: true,
    },
    classes,
    sortOrder: 'asc',
    isSortedOn: true,
  };
  it('component should render label and icon', () => {
    const component = shallow(<TableHeadContent {...props} />);
    const actualLabel = component
      .find(`span.${classes.columnHeaderInner}`)
      .childAt(0)
      .text();

    const actualArrow = component
      .find(`span.${classes.columnHeaderInner}`)
      .childAt(1)
      .text();

    expect(actualLabel).to.equal('TestLabel');
    expect(actualArrow).to.equal('<TableHeadIcon />');
  });

  it('render class if the table is sorted on this column', () => {
    const component = shallow(<TableHeadContent {...props} />);
    const actual = component.find('.columnHeaderSorted').length;

    const expected = 1;
    expect(actual).to.equal(expected);
  });
  it('dont render class if the table is sorted on another column', () => {
    const component = shallow(<TableHeadContent {...props} isSortedOn={false} />);

    const actual = component.find('.columnHeaderSorted').length;

    const expected = 0;
    expect(actual).to.equal(expected);
  });
  it('component should render icon to the left', () => {
    const component = shallow(<TableHeadContent {...props} colSpec={{ ...props.colSpec, align: 'right' }} />);
    const actualLabel = component
      .find(`span.${classes.columnHeaderInner}`)
      .childAt(1)
      .text();

    const actualArrow = component
      .find(`span.${classes.columnHeaderInner}`)
      .childAt(0)
      .text();

    expect(actualLabel).to.equal('TestLabel');
    expect(actualArrow).to.equal('<TableHeadIcon />');
  });
});
