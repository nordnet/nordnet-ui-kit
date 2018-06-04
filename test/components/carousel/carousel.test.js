import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Swipe from 'react-easy-swipe';
import { mockClasses } from '../../../src';
import { Component as Carousel, styles } from '../../../src/components/carousel/carousel';

describe('<Carousel />', () => {
  const classes = mockClasses(styles);
  const defaultItemSize = 262;
  const sandbox = sinon.sandbox.create();
  const defaultProps = {
    classes,
    defaultItemSize,
  };

  const component = shallow(
    <Carousel {...defaultProps}>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Carousel>,
  );

  beforeEach(() => {
    component.instance().state = { wrapperSize: 1000, itemSize: 262 };
    component.instance().itemList = { swiper: { clientWidth: 800 } };
    component.instance().wrapper = { getBoundingClientRect: () => ({ left: 0 }) };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('it should render a Swipe', () => {
    expect(component.find(Swipe)).to.have.length(1);
  });

  it('it should render 2 buttons', () => {
    expect(component.find('button')).to.have.length(2);
  });

  it('calcTransform', () => {
    expect(component.instance().calcTransform(456)).to.equal('translate3d(456%, 0, 0)');
  });

  it('calcMovePositions', () => {
    expect(component.instance().calcMovePositions(456)).to.equal(1);
    expect(component.instance().calcMovePositions(756)).to.equal(2);
  });

  it('moveTo should set firstPosition', () => {
    component.instance().moveTo(-1);

    expect(component.instance().state.selectedItem).to.equal(0);
  });

  it('moveTo should set lastPosition', () => {
    component.instance().moveTo(10);

    expect(component.instance().state.selectedItem).to.equal(4);
  });

  it('onSwipeStart should set swiping true', () => {
    component.instance().onSwipeStart();

    expect(component.instance().state.swiping).to.equal(true);
  });

  it('onSwipeEnd should set swiping false', () => {
    component.instance().onSwipeEnd();

    expect(component.instance().state.swiping).to.equal(false);
  });

  it('updateSizes should set percentage, itemSize, wrapperSize', () => {
    component.instance().updateSizes();
    const expected = {
      wrapperSize: 800,
      itemSize: defaultItemSize,
      percentage: 32.75,
    };

    expect(component.instance().state).to.deep.equal(expected);
  });

  it('that wrapperClickHandler calls increment when item clicked is halfway outside the swiper area', () => {
    const e = {
      nativeEvent: {
        clientX: 10000,
      },
    };
    const spy = sinon.spy(component.instance(), 'increment');
    component.instance().wrapperClickHandler(e);

    expect(spy.calledOnce).to.equal(true);
  });

  it('should render on state update', () => {
    const renderSpy = sinon.spy(component.instance(), 'render');
    component.instance().setState({});

    expect(renderSpy.calledOnce).to.equal(true);
  });
});
