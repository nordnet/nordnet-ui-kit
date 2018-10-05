import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses, Icon } from '../../../src';
import { Component as Pagination, styles } from '../../../src/components/pagination/pagination';
import Stepper from '../../../src/components/pagination/stepper';
import Range from '../../../src/components/pagination/range';

describe('<Pagination />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    total: 100,
    limit: 10,
    buttonTextPrevious: 'Previous',
    buttonTextNext: 'Next',
  };
  const shallowComponent = customProps => shallow(<Pagination {...defaultProps} {...customProps} />);

  it('should not paginate if there is only 1 page', () => {
    const wrapper = shallowComponent({ total: 10, limit: 10 });

    expect(wrapper.find(`ul.${classes.list}`).length).to.equal(0);
  });

  it('should render a nav element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find('nav').length).to.equal(1);
  });

  it('should render next and previous buttons', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Stepper).length).to.equal(2);
  });

  it('previous button should not be clickable', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .first()
        .prop('clickable'),
    ).to.equal(false);
  });

  it('previous button should be clickable', () => {
    const wrapper = shallowComponent({ selected: 2 });

    expect(
      wrapper
        .find(Stepper)
        .first()
        .prop('clickable'),
    ).to.equal(true);
  });

  it('next button should not be clickable', () => {
    const wrapper = shallowComponent({ selected: 10 });

    expect(
      wrapper
        .find(Stepper)
        .last()
        .prop('clickable'),
    ).to.equal(false);
  });

  it('next button should be clickable', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .last()
        .prop('clickable'),
    ).to.equal(true);
  });

  it('next button should render text', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .last()
        .find(`.${classes.stepperText}`)
        .childAt(0)
        .text(),
    ).to.equal(defaultProps.buttonTextNext);
  });

  it('next button should render SVG', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .last()
        .find(Icon.ArrowRight).length,
    ).to.equal(1);
  });

  it('previous button should render text', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .first()
        .find(`.${classes.stepperText}`)
        .childAt(0)
        .text(),
    ).to.equal(defaultProps.buttonTextPrevious);
  });

  it('previous button should render SVG', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .first()
        .find(Icon.ArrowLeft).length,
    ).to.equal(1);
  });

  it('should render a range of pages', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Range).length).to.equal(1);
  });

  it('should increment selected in state', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ changeHandler: clickCallback });

    wrapper
      .find(Stepper)
      .last()
      .props()
      .clickHandler();

    expect(wrapper.state().selected).to.equal(2);
  });

  it('should decrement selected in state', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ changeHandler: clickCallback, selected: 2 });

    wrapper
      .find(Stepper)
      .first()
      .props()
      .clickHandler();

    expect(wrapper.state().selected).to.equal(1);
  });

  it('should increment selected in state when prop changes', () => {
    const clickCallback = sinon.spy();
    const selected = 1;
    const wrapper = shallowComponent({ selected, changeHandler: clickCallback });

    wrapper.setProps({ selected: selected + 1 });

    expect(wrapper.state().selected).to.equal(selected + 1);
  });

  it('should decrement selected in state when prop changes', () => {
    const clickCallback = sinon.spy();
    const selected = 2;
    const wrapper = shallowComponent({ selected, changeHandler: clickCallback });

    wrapper.setProps({ selected: selected - 1 });

    expect(wrapper.state().selected).to.equal(selected - 1);
  });
});
