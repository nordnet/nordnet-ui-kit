import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { mockClasses, Icon } from '../../../src';
import { Component as Pagination, styles } from '../../../src/components/pagination/pagination';
import Stepper from '../../../src/components/pagination/stepper';
import Page from '../../../src/components/pagination/page';
import Ellipsis from '../../../src/components/pagination/ellipsis';

describe('<Pagination />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    total: 100,
    limit: 10,
    changeHandler: () => {},
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

  it('should render a ul element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`ul.${classes.list}`).length).to.equal(1);
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

  it('should render 5 pages', () => {
    const wrapper = shallowComponent({ total: 50, limit: 10 });

    expect(wrapper.find(Page).length).to.equal(5);
  });

  it('should render one ellipsis', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Ellipsis).length).to.equal(1);
  });

  it('should render one ellipsis', () => {
    const wrapper = shallowComponent({ total: 100, limit: 10 });
    wrapper.setState({ selected: 5 });

    expect(wrapper.find(Ellipsis).length).to.equal(2);
  });

  it('should set state with correct page number', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ changeHandler: clickCallback });

    wrapper
      .find(Page)
      .at(3)
      .props()
      .clickHandler(4);

    expect(wrapper.state().selected).to.equal(4);
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

  it('second page item is an anchor', () => {
    const wrapper = shallowComponent({
      selectedSiblings: 1,
      anchors: 2,
      limit: 10,
      total: 100,
      selected: 10,
    });

    expect(
      wrapper
        .find(Page)
        .at(1)
        .props().pageNumber,
    ).to.equal(2);
  });

  it('second page item is a sibling of selected', () => {
    const wrapper = shallowComponent({
      selectedSiblings: 2,
      anchors: 1,
      limit: 10,
      total: 100,
      selected: 6,
    });

    expect(
      wrapper
        .find(Page)
        .at(1)
        .props().pageNumber,
    ).to.equal(4);
  });
});
