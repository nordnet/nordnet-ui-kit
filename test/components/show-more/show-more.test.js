import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as ShowMore } from '../../../src/components/show-more/show-more';
import styles from '../../../src/components/show-more/show-more-styles';
import { Button, mockClasses } from '../../../src';

const classes = mockClasses(styles);

const defaultProps = {
  children: 'Children',
  classes,
};

let addEventListenerSpy;
let removeEventListenerSpy;

const getWrapper = (props = {}) => shallow(<ShowMore {...defaultProps} {...props} />, { disableLifecycleMethods: true });

describe('<ShowMore />', () => {
  beforeEach(() => {
    addEventListenerSpy = sinon.spy(window, 'addEventListener');
    removeEventListenerSpy = sinon.spy(window, 'removeEventListener');
  });
  afterEach(() => {
    addEventListenerSpy.restore();
    removeEventListenerSpy.restore();
  });
  it('should render <div> as container', () => {
    const wrapper = getWrapper();
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).to.equal(expected);
  });

  it('should not show button if content fits', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = {
      scrollHeight: 500,
      clientHeight: 500,
    };
    wrapper.instance().componentDidMount();
    expect(wrapper.state('isOverflowing')).to.equal(false);
  });

  it('should show button if content does not fit', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().componentDidMount();
    expect(wrapper.state('isOverflowing')).to.equal(true);
  });

  it('should register resize event listener on mount', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().componentDidMount();
    expect(addEventListenerSpy.args[0][0]).to.equal('resize');
  });

  it('should deregister resize event listener on unmount', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().componentWillUnmount();
    expect(removeEventListenerSpy.args[0][0]).to.equal('resize');
  });

  it('should set showMoreClicked to true when show more button is clicked', () => {
    const wrapper = getWrapper();
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().handleShowMore();
    expect(wrapper.state('showMoreClicked')).to.equal(true);
  });

  it('should call user supplied onShowMore when show more button is clicked', () => {
    const onShowMore = sinon.spy();
    const wrapper = getWrapper({ onShowMore });
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.instance().handleShowMore();
    expect(onShowMore.calledOnce).to.equal(true);
  });

  it('should render correct content in show more button', () => {
    const wrapper = getWrapper({ showMoreButtonContent: 'content' });
    wrapper.instance().descriptionContainer = { scrollHeight: 600, clientHeight: 500 };
    wrapper.setState({ isOverflowing: true });
    expect(
      wrapper
        .find(Button)
        .childAt(0)
        .text(),
    ).to.equal('content');
  });
});
