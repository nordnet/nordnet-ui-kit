import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Icon } from '../../../src';

describe('<Icon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon.ArrowLeft />);
  });

  it('should render an svg', () => {
    expect(wrapper.type()).to.equal('svg');
  });

  it('should set default proportions', () => {
    expect(wrapper.prop('width')).to.equal(16);
    expect(wrapper.prop('height')).to.equal(16);
    expect(wrapper.prop('viewBox')).to.equal('0 0 16 16');
  });

  it('should be able to override stroke', () => {
    const color = 'tomato';
    wrapper = shallow(<Icon.Cloud stroke={color} />);
    console.log(wrapper.debug());
    expect(wrapper.find('#Artboard-1').prop('stroke')).to.equal(color);
  });

  it('should be able to override fill', () => {
    const color = 'crimson';
    wrapper = shallow(<Icon.Trash fill={color} />);
    console.log(wrapper.debug());
    expect(wrapper.find('#Artboard').prop('fill')).to.equal(color);
  });
});
