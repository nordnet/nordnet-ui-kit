import React from 'react';
import { shallow } from 'enzyme';
import { Component as Tabpanel, styles } from './tabpanel';
import { mockClasses } from '../../../';

const classes = mockClasses(styles);

const defaultProps = {
  classes,
  children: 'label',
  selected: false,
  index: 0,
};

const renderComponent = props => shallow(<Tabpanel {...defaultProps} {...props} />);

describe('<Tabpanel />', () => {
  test('should render section as container', () => {
    const wrapper = renderComponent();
    const actual = wrapper.type();
    const expected = 'section';

    expect(actual).toBe(expected);
  });

  test('should role tabpanel', () => {
    const wrapper = renderComponent({ index: 0 });
    const actual = wrapper.props().role;
    const expected = 'tabpanel';

    expect(actual).toBe(expected);
  });

  test('should render a default id', () => {
    const wrapper = renderComponent({ index: 3 });
    const actual = wrapper.props().id;
    const expected = 'tabs-tabpanel-3';

    expect(actual).toBe(expected);
  });

  test('should override default id', () => {
    const wrapper = renderComponent({ index: 3, id: 'tabpanelid' });
    const actual = wrapper.props().id;
    const expected = 'tabpanelid';

    expect(actual).toBe(expected);
  });

  test('should have attribute aria-labelledby', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.props()['aria-labelledby'];
    const expected = 'tabs-tab-2';

    expect(actual).toBe(expected);
  });

  test('should not have attribute aria-labelledby if singlePanel', () => {
    const wrapper = renderComponent({ index: 2, singlePanel: true });
    const actual = wrapper.props()['aria-labelledby'];
    const expected = null;

    expect(actual).toBe(expected);
  });

  test('should have hidden attribute', () => {
    const wrapper = renderComponent({ index: 2, selected: false });
    const actual = wrapper.props().hidden;
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should not have hidden attribute', () => {
    const wrapper = renderComponent({ index: 2, selected: true });
    const actual = wrapper.props().hidden;
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('should never have hidden attribute if singlePanel', () => {
    const wrapper = renderComponent({ index: 2, selected: false, singlePanel: true });
    const actual = wrapper.props().hidden;
    const expected = null;

    expect(actual).toBe(expected);
  });

  test('should render content', () => {
    const wrapper = renderComponent({ index: 1, children: 'test content' });
    const actual = wrapper.childAt(0).text();
    const expected = 'test content';

    expect(actual).toBe(expected);
  });
});
