import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses } from '../../../src';
import { Component as Page, styles } from '../../../src/components/pagination/page/page';

describe('<Page />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    isSelected: false,
    isFirst: false,
    isLast: false,
    pageNumber: 2,
    labelText: '',
    url: '',
    selectHandler: () => {},
  };

  const shallowComponent = customProps => shallow(<Page {...defaultProps} {...customProps} />);

  it('should render a li element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`li.${classes.item}`).length).to.equal(1);
  });

  it('should render a li element with class itemAlwaysVisible if page is selected', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).to.equal(true);
  });

  it('should render a li element with class itemAlwaysVisible if page is first', () => {
    const wrapper = shallowComponent({ isFirst: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).to.equal(true);
  });

  it('should render a li element with class itemAlwaysVisible if page is last', () => {
    const wrapper = shallowComponent({ isLast: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).to.equal(true);
  });

  it('should render a link if url is provided', () => {
    const wrapper = shallowComponent({ pageNumber: 2, url: '?page=2' });

    expect(wrapper.find('a').length).to.equal(1);
  });

  it('should render a custom element if node is provided', () => {
    const wrapper = shallowComponent({ pageNumber: 2, url: '?page=2', node: 'span' });

    expect(wrapper.find('span').length).to.equal(1);
  });

  it('should render a button if on current page', () => {
    const wrapper = shallowComponent({ pageNumber: 2, url: '?page=2', isSelected: true });

    expect(wrapper.find(`button.${classes.button}.${classes.buttonSelected}`).length).to.equal(1);
  });

  it('should render a disabled button', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find('button').props().disabled).to.equal(true);
  });

  it('custom element should have "to" prop', () => {
    const wrapper = shallowComponent({ pageNumber: 5, url: '?page=5', node: 'ReactRouterLink' });

    expect(wrapper.find('ReactRouterLink').props().to).to.equal('?page=5');
  });

  it('should render text in button from children prop', () => {
    const wrapper = shallowComponent({ children: '1' });

    expect(
      wrapper
        .find('button')
        .first()
        .childAt(0)
        .text(),
    ).to.equal('1');
  });

  it('should render text in button from children prop', () => {
    const wrapper = shallowComponent({ children: '1', url: '?page=1', isSelected: true });

    expect(
      wrapper
        .find('button')
        .first()
        .childAt(0)
        .text(),
    ).to.equal('1');
  });

  it('should render aria-label text', () => {
    const wrapper = shallowComponent({ labelText: 'Go to page' });

    expect(wrapper.find('button').props()['aria-label']).to.equal('Go to page');
  });

  it('should handle click on button', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ selectHandler: clickCallback });

    wrapper.find('button').simulate('click');
    expect(clickCallback.calledOnce).to.equal(true);
  });

  it('should handle click on Link', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ selectHandler: clickCallback, url: '?page=1', isSelected: false });

    wrapper.find('a').simulate('click');
    expect(clickCallback.calledOnce).to.equal(true);
  });
});
