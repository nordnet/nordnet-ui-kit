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
    clickHandler: () => {},
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

  it('should render a button', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`button.${classes.button}`).length).to.equal(1);
  });

  it('should render a selected button', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find(`button.${classes.buttonSelected}`).length).to.equal(1);
  });

  it('should render a disabled button', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find(`button.${classes.buttonSelected}`).props().disabled).to.equal(true);
  });

  it('should render a disabled button', () => {
    const wrapper = shallowComponent({ children: '1' });

    expect(
      wrapper
        .find('button')
        .childAt(0)
        .text(),
    ).to.equal('1');
  });

  it('should render text from children prop', () => {
    const wrapper = shallowComponent({ children: '1' });

    expect(
      wrapper
        .find('button')
        .childAt(0)
        .text(),
    ).to.equal('1');
  });

  it('should render aria-label text', () => {
    const wrapper = shallowComponent({ labelText: 'Go to page' });

    expect(wrapper.find('button').props()['aria-label']).to.equal('Go to page');
  });

  it('should handle click', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ selectHandler: clickCallback });

    wrapper.find('button').simulate('click');
    expect(clickCallback.calledOnce).to.equal(true);
  });
});
