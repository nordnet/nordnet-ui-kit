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
      <Animate show>
        {inputText}
      </Animate>,
    );
    wrapper = topWrapper.childAt(0);
  });

  it('should render a CSSTransitionGroup', () => {
    expect(topWrapper.type()).to.equal(CSSTransitionGroup);
  });

  it('should default to hide the content', () => {
    topWrapper = shallow(
      <Animate>
        {inputText}
      </Animate>,
    );
    expect(topWrapper.find('.animate')).to.have.length(0);
  });

  it('should add the class "animate" to the content wrapper', () => {
    expect(wrapper.hasClass('animate')).to.equal(true);
  });

  it(`should render the text ${inputText}`, () => {
    expect(wrapper.text()).to.equal(inputText);
  });
});
