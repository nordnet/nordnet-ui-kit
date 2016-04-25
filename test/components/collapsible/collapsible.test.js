import React from 'react';
import { describeWithDOM, mount } from 'enzyme';
import { expect } from 'chai';
import Collapsible from '../../../src/components/collapsible/collapsible';

describeWithDOM('<Collapsible />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Collapsible toggle={ <button>Toggle</button> }>Collapsible</Collapsible>);
  });

  it('should be collapsed by default', () => expect(wrapper.state('collapsed')).to.equal(true));
  it('should not be collapsed after click', () => {
    wrapper.find('.collapsible__toggle').simulate('click');
    expect(wrapper.state('collapsed')).to.equal(false);
  });
});
