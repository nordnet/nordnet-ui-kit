import React from 'react';
import { shallow } from 'enzyme';
import { Component as Tabs, styles } from './tabs';
import Tab from './tab/tab';
import Tabpanel from './tabpanel/tabpanel';
import { mockClasses } from '../..';

const classes = mockClasses(styles);

const defaultProps = {
  classes,
  value: 0,
};

const renderComponent = props =>
  shallow(
    <Tabs {...defaultProps} {...props}>
      <Tab>Tab1</Tab>
      <Tab>Tab2</Tab>
      <Tabpanel>Tab1 content</Tabpanel>
      <Tabpanel>Tab2 content</Tabpanel>
    </Tabs>,
  );

describe('<Tabs />', () => {
  test('should render div as container', () => {
    const wrapper = renderComponent();
    const actual = wrapper.type();
    const expected = 'div';

    expect(actual).toBe(expected);
  });

  test('should render ul', () => {
    const wrapper = renderComponent();
    const actual = wrapper.find('ul').length;
    const expected = 1;

    expect(actual).toBe(expected);
  });

  test('should render variant class', () => {
    const wrapper = renderComponent({ variant: 'tertiary' });
    const actual = wrapper.find('ul').hasClass(classes.tertiary);

    expect(actual).toBe(true);
  });

  test('should render role tablist', () => {
    const wrapper = renderComponent();
    const actual = wrapper.find('ul').props().role;
    const expected = 'tablist';

    expect(actual).toBe(expected);
  });

  test('should render class from props', () => {
    const wrapper = renderComponent({ className: 'test' });
    const actual = wrapper.find('ul').hasClass('test');
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should render two tabs inside tablist', () => {
    const wrapper = renderComponent();
    const actual = wrapper.find('ul[role="tablist"]').find(Tab).length;
    const expected = 2;

    expect(actual).toBe(expected);
  });

  test('should render two tabpanels', () => {
    const wrapper = renderComponent();
    const actual = wrapper.find(Tabpanel).length;
    const expected = 2;

    expect(actual).toBe(expected);
  });

  test('value prop should set what tab is selected', () => {
    const wrapper = renderComponent({ value: 1 });
    const actual = wrapper
      .find(Tab)
      .at(1)
      .props().selected;
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('value prop should set what tabpanel is selected', () => {
    const wrapper = renderComponent({ value: 1 });
    const actual = wrapper
      .find(Tabpanel)
      .at(1)
      .props().selected;
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should give tab index prop', () => {
    const wrapper = renderComponent();
    const actual = wrapper
      .find(Tab)
      .at(1)
      .props().index;
    const expected = 1;

    expect(actual).toBe(expected);
  });

  test('should give tabpanel index prop', () => {
    const wrapper = renderComponent();
    const actual = wrapper
      .find(Tabpanel)
      .at(0)
      .props().index;
    const expected = 0;

    expect(actual).toBe(expected);
  });

  test('should give tab variant prop', () => {
    const wrapper = renderComponent({ variant: 'secondary' });
    const actual = wrapper
      .find(Tab)
      .first()
      .props().variant;
    const expected = 'secondary';

    expect(actual).toBe(expected);
  });

  test('should give tabpanel variant prop', () => {
    const wrapper = renderComponent({ variant: 'secondary' });
    const actual = wrapper
      .find(Tabpanel)
      .last()
      .props().variant;
    const expected = 'secondary';

    expect(actual).toBe(expected);
  });

  test('should give tab singlePanel prop', () => {
    const wrapper = renderComponent({ singlePanel: true });
    const actual = wrapper
      .find(Tab)
      .first()
      .props().singlePanel;
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should give tabpanel singlePanel prop', () => {
    const wrapper = renderComponent({ singlePanel: true });
    const actual = wrapper
      .find(Tabpanel)
      .last()
      .props().singlePanel;
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should give tab onChange prop', () => {
    const callback = () => {};
    const wrapper = renderComponent({ onChange: callback });
    const actual = wrapper
      .find(Tab)
      .first()
      .props().changeHandler;

    expect(actual).toBe(callback);
  });

  test('should not give tabpanel onChange prop', () => {
    const callback = () => {};
    const wrapper = renderComponent({ onChange: callback });
    const actual = wrapper
      .find(Tabpanel)
      .first()
      .props().changeHandler;
    const expected = null;

    expect(actual).toBe(expected);
  });
});
