import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Animate from '../../../src/components/animate/animate';

describe('<Animate />', () => {
  const inputText = 'ISK';
  const shallow = createShallow(enzymeShallow);
  let topWrapper;
  let wrapper;

  beforeEach(() => {
    topWrapper = shallow(
      <Animate>
        {inputText}
      </Animate>,
    );
    wrapper = topWrapper.childAt(0);
  });

  it('should render a CSSTransitionGroup', () => {
    expect(topWrapper.type()).to.equal(CSSTransitionGroup);
  });

  it(`should render the text ${inputText}`, () => {
    expect(wrapper.text()).to.equal(inputText);
  });

  it('should give a unique identifier to each Animate instance', () => {
    const transitionName = topWrapper.prop('transitionName');
    const otherWrapper = shallow(
      <Animate>
        {inputText}
      </Animate>,
    );

    const otherTransitionName = otherWrapper.prop('transitionName');
    expect(transitionName).to.not.equal(otherTransitionName);
  });
});
