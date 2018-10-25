import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Tabpanel, styles } from '../../../src/components/tabpanel/tabpanel';
import { mockClasses } from '../../../src';

const classes = mockClasses(styles);

const defaultProps = {
  classes,
  children: 'label',
  selected: false,
  index: 0,
};

const renderComponent = props => shallow(<Tabpanel {...defaultProps} {...props} />);

describe('<Tabpanel />', () => {
  it('should render section as container', () => {
    const wrapper = renderComponent();
    const actual = wrapper.type();
    const expected = 'section';

    expect(actual).to.equal(expected);
  });

  it('should role tabpanel', () => {
    const wrapper = renderComponent({ index: 0 });
    const actual = wrapper.props().role;
    const expected = 'tabpanel';

    expect(actual).to.equal(expected);
  });

  it('should render a default id', () => {
    const wrapper = renderComponent({ index: 3 });
    const actual = wrapper.props().id;
    const expected = 'tabs-tabpanel-3';

    expect(actual).to.equal(expected);
  });

  it('should override default id', () => {
    const wrapper = renderComponent({ index: 3, id: 'tabpanelid' });
    const actual = wrapper.props().id;
    const expected = 'tabpanelid';

    expect(actual).to.equal(expected);
  });

  it('should have attribute aria-labelledby', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.props()['aria-labelledby'];
    const expected = 'tabs-tab-2';

    expect(actual).to.equal(expected);
  });

  it('should not have attribute aria-labelledby if singlePanel', () => {
    const wrapper = renderComponent({ index: 2, singlePanel: true });
    const actual = wrapper.props()['aria-labelledby'];
    const expected = null;

    expect(actual).to.equal(expected);
  });

  it('should have hidden attribute', () => {
    const wrapper = renderComponent({ index: 2, selected: false });
    const actual = wrapper.props().hidden;
    const expected = true;

    expect(actual).to.equal(expected);
  });

  it('should not have hidden attribute', () => {
    const wrapper = renderComponent({ index: 2, selected: true });
    const actual = wrapper.props().hidden;
    const expected = false;

    expect(actual).to.equal(expected);
  });

  it('should never have hidden attribute if singlePanel', () => {
    const wrapper = renderComponent({ index: 2, selected: false, singlePanel: true });
    const actual = wrapper.props().hidden;
    const expected = null;

    expect(actual).to.equal(expected);
  });

  it('should render content', () => {
    const wrapper = renderComponent({ index: 1, children: 'test content' });
    const actual = wrapper.childAt(0).text();
    const expected = 'test content';

    expect(actual).to.equal(expected);
  });
});
