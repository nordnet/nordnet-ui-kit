import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses, Icon } from '../..';
import { Component as Pagination, styles } from './pagination';
import Stepper from './stepper';
import Range from './range';

describe('<Pagination />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    total: 100,
    limit: 10,
    buttonTextPrevious: 'Previous',
    buttonTextNext: 'Next',
    urlGenerator: () => null,
  };
  const shallowComponent = customProps =>
    shallow(<Pagination {...defaultProps} {...customProps} />);

  test('should not paginate if there is only 1 page', () => {
    const wrapper = shallowComponent({ total: 10, limit: 10 });

    expect(wrapper.find(`ul.${classes.list}`)).toHaveLength(0);
  });

  test('should render a nav element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find('nav')).toHaveLength(1);
  });

  test('should render next and previous buttons', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Stepper)).toHaveLength(2);
  });

  test('previous button should not be clickable', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .first()
        .prop('disabled'),
    ).toBe(true);
  });

  test('previous button should be clickable', () => {
    const wrapper = shallowComponent({ selected: 2 });

    expect(
      wrapper
        .find(Stepper)
        .first()
        .prop('disabled'),
    ).toBe(false);
  });

  test('next button should not be clickable', () => {
    const wrapper = shallowComponent({ selected: 10 });

    expect(
      wrapper
        .find(Stepper)
        .last()
        .prop('disabled'),
    ).toBe(true);
  });

  test('next button should be clickable', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .last()
        .prop('disabled'),
    ).toBe(false);
  });

  test('next button should render text', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .last()
        .find(`.${classes.stepperText}`)
        .childAt(0)
        .text(),
    ).toBe(defaultProps.buttonTextNext);
  });

  test('next button should render SVG', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .last()
        .find(Icon.ArrowRight),
    ).toHaveLength(1);
  });

  test('previous button should render text', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .first()
        .find(`.${classes.stepperText}`)
        .childAt(0)
        .text(),
    ).toBe(defaultProps.buttonTextPrevious);
  });

  test('previous button should render SVG', () => {
    const wrapper = shallowComponent();

    expect(
      wrapper
        .find(Stepper)
        .first()
        .find(Icon.ArrowLeft),
    ).toHaveLength(1);
  });

  test('should render a range of pages', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Range)).toHaveLength(1);
  });

  test('should increment selected in state', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ changeHandler: clickCallback });

    wrapper
      .find(Stepper)
      .last()
      .props()
      .clickHandler();

    expect(wrapper.state().selected).toBe(2);
  });

  test('should decrement selected in state', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ changeHandler: clickCallback, selected: 2 });

    wrapper
      .find(Stepper)
      .first()
      .props()
      .clickHandler();

    expect(wrapper.state().selected).toBe(1);
  });

  test('should increment selected in state when prop changes', () => {
    const clickCallback = sinon.spy();
    const selected = 1;
    const wrapper = shallowComponent({ selected, changeHandler: clickCallback });

    wrapper.setProps({ selected: selected + 1 });

    expect(wrapper.state().selected).toBe(selected + 1);
  });

  test('should decrement selected in state when prop changes', () => {
    const clickCallback = sinon.spy();
    const selected = 2;
    const wrapper = shallowComponent({ selected, changeHandler: clickCallback });

    wrapper.setProps({ selected: selected - 1 });

    expect(wrapper.state().selected).toBe(selected - 1);
  });
});
