import React from 'react';
import { expect } from 'chai';
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

  it('should render a ul element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`ul.${classes.list}`).length).to.equal(1);
  });

  it('should render 5 pages', () => {
    const wrapper = shallowComponent({ pagesCount: 5 });

    expect(wrapper.find(Page).length).to.equal(5);
  });

  it('should render one ellipsis', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Ellipsis).length).to.equal(1);
  });

  it('should render two ellipsis', () => {
    const wrapper = shallowComponent({ selected: 5 });

    expect(wrapper.find(Ellipsis).length).to.equal(2);
  });

  it('should mark page as selected', () => {
    const wrapper = shallowComponent({ selected: 3 });

    expect(
      wrapper
        .find(Page)
        .at(2)
        .props().isSelected,
    ).to.equal(true);
  });

  it('first page should have prop isFirst', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .first()
        .props().isFirst,
    ).to.equal(true);
  });

  it('first page should not have prop isLast', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .first()
        .props().isLast,
    ).to.equal(false);
  });

  it('last page should have prop isLast', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .last()
        .props().isLast,
    ).to.equal(true);
  });

  it('last page should not have prop isFirst', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .last()
        .props().isFirst,
    ).to.equal(false);
  });

  it('page should have false on the prop isFirst', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .at(2)
        .props().isFirst,
    ).to.equal(false);
  });

  it('page should have false on the prop isLast', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Page)
        .at(2)
        .props().isLast,
    ).to.equal(false);
  });

  it('render label text for page', () => {
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
    ).to.equal('go to page 1');
  });

  it('render label text for selected page', () => {
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
    ).to.equal('current page 1');
  });
});
