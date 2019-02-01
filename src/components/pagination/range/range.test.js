import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../../..';
import { Component as Range, styles } from './range';
import Page from '../page';
import Ellipsis from '../ellipsis';

describe('<Range />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    anchors: 1,
    pagesCount: 10,
    selected: 1,
    selectedSiblings: 2,
    urlGenerator: () => null,
  };

  const shallowComponent = customProps => shallow(<Range {...defaultProps} {...customProps} />);

  test('should render a ul element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`ul.${classes.list}`).length).toBe(1);
  });

  test('should render 5 pages', () => {
    const wrapper = shallowComponent({ pagesCount: 5 });

    expect(wrapper.find(Page).length).toBe(5);
  });

  test('should render one ellipsis', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Ellipsis).length).toBe(1);
  });

  test('should render two ellipsis', () => {
    const wrapper = shallowComponent({ selected: 5 });

    expect(wrapper.find(Ellipsis).length).toBe(2);
  });

  test('should mark page as selected', () => {
    const wrapper = shallowComponent({ selected: 3 });

    expect(
      wrapper
        .find(Page)
        .at(2)
        .props().isSelected,
    ).toBe(true);
  });

  test('first page should have prop isFirst', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .first()
        .props().isFirst,
    ).toBe(true);
  });

  test('first page should not have prop isLast', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .first()
        .props().isLast,
    ).toBe(false);
  });

  test('last page should have prop isLast', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .last()
        .props().isLast,
    ).toBe(true);
  });

  test('last page should not have prop isFirst', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .last()
        .props().isFirst,
    ).toBe(false);
  });

  test('page should have false on the prop isFirst', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .at(2)
        .props().isFirst,
    ).toBe(false);
  });

  test('page should have false on the prop isLast', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .at(2)
        .props().isLast,
    ).toBe(false);
  });

  test('render label text for page', () => {
    const wrapper = shallowComponent({
      selected: 2,
      pageLabelText: 'go to page',
      pageLebelSelected: 'current page',
    });

    expect(
      wrapper
        .find(Page)
        .first()
        .props().labelText,
    ).toBe('go to page 1');
  });

  test('render label text for selected page', () => {
    const wrapper = shallowComponent({
      selected: 1,
      pageLabelText: 'go to page',
      pageLabelTextSelected: 'current page',
    });

    expect(
      wrapper
        .find(Page)
        .first()
        .props().labelText,
    ).toBe('current page 1');
  });
});
