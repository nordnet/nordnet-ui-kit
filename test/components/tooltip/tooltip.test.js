import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Tooltip from '../../../src/components/tooltip/tooltip';

describe('<Tooltip />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tooltip content="Lorem ipsum dolor sit amet." />);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should not show the tooltip as default', () => {
    expect(wrapper.state('hover')).to.equal(false);
    expect(wrapper.state('toggled')).to.equal(false);
  });

  it('should show the tooltip when hovered', () => {
    wrapper.find('.tooltip-container').simulate('mouseEnter');
    expect(wrapper.state('hover')).to.equal(true);
    wrapper.find('.tooltip-container').simulate('mouseLeave');
    expect(wrapper.state('hover')).to.equal(false);
  });

  it('should toggle the tooltip when clicked', () => {
    wrapper.find('.tooltip-container').simulate('click');
    expect(wrapper.state('toggled')).to.equal(true);
  });
});
