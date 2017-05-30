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
      <Animate animationName="testAnimationName">
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

  it('should require an animationName to render', () => {
    const otherWrapper = shallow(<Animate>{inputText}</Animate>);
    expect(otherWrapper.html()).to.equal(null);
  });
});
