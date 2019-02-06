import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as ShowMore } from './show-more';
import styles from './show-more-styles';
import { Button, mockClasses } from '../..';

const classes = mockClasses(styles);

const defaultProps = {
  children: 'Children',
  classes,
};

let addEventListenerSpy;
let removeEventListenerSpy;

const getWrapper = (props = {}) =>
  shallow(<ShowMore {...defaultProps} {...props} />, { disableLifecycleMethods: true });

describe('<ShowMore />', () => {
  beforeEach(() => {
    addEventListenerSpy = sinon.spy(window, 'addEventListener');
    removeEventListenerSpy = sinon.spy(window, 'removeEventListener');
  });
  afterEach(() => {
    addEventListenerSpy.restore();
    removeEventListenerSpy.restore();
  });
  test('should render <div> as container', () => {
    const wrapper = getWrapper();
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toBe(expected);
  });

  test('should not show button if content fits', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = {
      scrollHeight: 500,
      clientHeight: 500,
    };
    wrapper.instance().componentDidMount();
    expect(wrapper.state('isOverflowing')).toBe(false);
  });

  test('should show button if content does not fit', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().componentDidMount();
    expect(wrapper.state('isOverflowing')).toBe(true);
  });

  test('should register resize event listener on mount', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().componentDidMount();
    expect(addEventListenerSpy.args[0][0]).toBe('resize');
  });

  test('should not check if overflow when updated with same children', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    const checkIfOverflowingSpy = sinon.spy(wrapper.instance(), 'checkIfOverflowing');
    wrapper.instance().componentDidUpdate({ children: 'Children' });
    expect(checkIfOverflowingSpy.notCalled).toBe(true);
  });

  test('should check if overflow when updated with new children', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    const checkIfOverflowingSpy = sinon.spy(wrapper.instance(), 'checkIfOverflowing');
    wrapper.instance().componentDidUpdate({ children: 'new child' });
    expect(checkIfOverflowingSpy.calledOnce).toBe(true);
  });

  test('should deregister resize event listener on unmount', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().componentWillUnmount();
    expect(removeEventListenerSpy.args[0][0]).toBe('resize');
  });

  test('should set showMoreClicked to true when show more button is clicked', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().handleShowMore();
    expect(wrapper.state('showMoreClicked')).toBe(true);
  });

  test('should call user supplied onShowMore when show more button is clicked', () => {
    const onShowMore = sinon.spy();
    const wrapper = getWrapper({ onShowMore });
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().handleShowMore();
    expect(onShowMore.calledOnce).toBe(true);
  });

  test('should render correct content in show more button', () => {
    const wrapper = getWrapper({ showMoreButtonContent: 'content' });
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.setState({ isOverflowing: true });
    expect(
      wrapper
        .find(Button)
        .childAt(0)
        .text(),
    ).toBe('content');
  });
});
