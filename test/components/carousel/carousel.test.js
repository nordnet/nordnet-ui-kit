// import React from 'react';
// import test from 'ava';
// import sinon from 'sinon';
// import { shallow } from 'enzyme';
// import Swipe from 'react-easy-swipe';
// import { Component as Carousel } from '../../../src/components/carousel';

// test.beforeEach(t => {
//   const component = shallow(
//     <Carousel classes={{}}>
//       <div>1</div>
//       <div>1</div>
//       <div>1</div>
//       <div>1</div>
//       <div>1</div>
//       <div>1</div>
//       <div>1</div>
//     </Carousel>,
//   );

//   component.instance().state = { wrapperSize: 1000, itemSize: 262 };
//   component.instance().itemList = { swiper: { clientWidth: 800 } };
//   component.instance().wrapper = { getBoundingClientRect: () => ({ left: 0 }) };
//   t.context.component = component; // eslint-disable-line no-param-reassign
// });

// const sandbox = sinon.sandbox.create();

// test.afterEach(t => {
//   sandbox.restore();
//   t.context.component = null; // eslint-disable-line no-param-reassign
// });

// test('it should render a Swipe', t => {
//   t.is(t.context.component.find(Swipe).length, 1);
// });

// test('it should render 2 buttons', t => {
//   t.is(t.context.component.find('button').length, 2);
// });

// test('calcTransform', t => {
//   t.is(t.context.component.instance().calcTransform(456), 'translate3d(456%, 0, 0)');
// });

// test('calcMovePositions', t => {
//   t.is(t.context.component.instance().calcMovePositions(456), 1);
//   t.is(t.context.component.instance().calcMovePositions(756), 2);
// });

// test('moveTo should set firstPosition', t => {
//   t.context.component.instance().moveTo(-1);

//   t.is(t.context.component.instance().state.selectedItem, 0);
// });

// test('moveTo should set lastPosition', t => {
//   t.context.component.instance().moveTo(10);

//   t.is(t.context.component.instance().state.selectedItem, 4);
// });

// test('onSwipeStart should set swiping true', t => {
//   t.context.component.instance().onSwipeStart();

//   t.true(t.context.component.instance().state.swiping);
// });

// test('onSwipeEnd should set swiping false', t => {
//   t.context.component.instance().onSwipeEnd();

//   t.false(t.context.component.instance().state.swiping);
// });

// test('updateSizes should set percentage, itemSize, wrapperSize', t => {
//   t.context.component.instance().updateSizes();
//   const expected = {
//     wrapperSize: 800,
//     itemSize: 262,
//     percentage: 32.75,
//   };

//   t.deepEqual(t.context.component.instance().state, expected);
// });

// test('that wrapperClickHandler calls increment when item clicked is halfway outside the swiper area', t => {
//   const e = {
//     nativeEvent: {
//       clientX: 10000,
//     },
//   };
//   const spy = sinon.spy(t.context.component.instance(), 'increment');
//   t.context.component.instance().wrapperClickHandler(e);

//   t.true(spy.calledOnce);
// });

// test('should render on state update', t => {
//   const renderSpy = sinon.spy(t.context.component.instance(), 'render');
//   t.context.component.instance().setState({});

//   t.true(renderSpy.calledOnce);
// });
