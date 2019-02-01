import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as Tab, styles } from './tab';
import { mockClasses } from '../../../';

const classes = mockClasses(styles);

const defaultProps = {
  classes,
  children: 'label',
  selected: false,
  variant: 'primary',
  index: 0,
};

const renderComponent = props => shallow(<Tab {...defaultProps} {...props} />);

describe('<Tab />', () => {
  test('should render <li> as container', () => {
    const wrapper = renderComponent();
    const actual = wrapper.type();
    const expected = 'li';

    expect(actual).toBe(expected);
  });

  test('should render role as presentation', () => {
    const wrapper = renderComponent();
    const actual = wrapper.props().role;
    const expected = 'presentation';

    expect(actual).toBe(expected);
  });

  test('should render correct classes', () => {
    const wrapper = renderComponent({ variant: 'secondary' });
    const actual = wrapper.hasClass(`${classes.root} ${classes.secondary}`);
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should render a button', () => {
    const wrapper = renderComponent({ singlePanel: true });
    const actual = wrapper.find('button').length;
    const expected = 1;

    expect(actual).toBe(expected);
  });

  test('should render a link', () => {
    const wrapper = renderComponent({ singlePanel: false });
    const actual = wrapper.find('a').length;
    const expected = 1;

    expect(actual).toBe(expected);
  });

  test('should render default href to link', () => {
    const wrapper = renderComponent({ singlePanel: false, index: 3 });
    const actual = wrapper.find('a').props().href;
    const expected = '#tabs-tab-3';

    expect(actual).toBe(expected);
  });

  test('should override default href to link', () => {
    const wrapper = renderComponent({ singlePanel: false, index: 3, href: '#special' });
    const actual = wrapper.find('a').props().href;
    const expected = '#special';

    expect(actual).toBe(expected);
  });

  test('should render a id', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.find('a').props().id;
    const expected = 'tabs-tab-2';

    expect(actual).toBe(expected);
  });

  test('should render correct class', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.find('a').hasClass(classes.tab);
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should have role as tab', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.find('a').props().role;
    const expected = 'tab';

    expect(actual).toBe(expected);
  });

  test('should have type button if element is a button', () => {
    const wrapper = renderComponent({ index: 1, singlePanel: true });
    const actual = wrapper.find('button').props().type;
    const expected = 'button';

    expect(actual).toBe(expected);
  });

  test('should not have type button if element is a link', () => {
    const wrapper = renderComponent({ index: 1, singlePanel: false });
    const actual = wrapper.find('a').props().type;
    const expected = null;

    expect(actual).toBe(expected);
  });

  test('should have aria-selected set to true', () => {
    const wrapper = renderComponent({ index: 1, selected: true });
    const actual = wrapper.find('a').props()['aria-selected'];
    const expected = true;

    expect(actual).toBe(expected);
  });

  test('should have aria-selected set to false', () => {
    const wrapper = renderComponent({ index: 1, selected: false });
    const actual = wrapper.find('a').props()['aria-selected'];
    const expected = false;

    expect(actual).toBe(expected);
  });

  test('should have onClick callback', () => {
    const spy = sinon.spy();
    const wrapper = renderComponent({ index: 1, changeHandler: spy });

    wrapper.find('a').simulate('click', { preventDefault: () => {} });

    expect(spy.calledOnce).toBe(true);
  });

  test('should render content', () => {
    const wrapper = renderComponent({ index: 1, children: 'tab label' });
    const actual = wrapper
      .find('a')
      .childAt(0)
      .text();
    const expected = 'tab label';

    expect(actual).toBe(expected);
  });
});
