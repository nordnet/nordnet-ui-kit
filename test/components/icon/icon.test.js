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
    expect(wrapper.find('g > g').prop('stroke')).to.equal(color);
  });

  it('should be able to override fill', () => {
    const color = 'crimson';
    wrapper = shallow(<Icon.Trash fill={color} />);
    expect(wrapper.find('g > g').prop('fill')).to.equal(color);
  });

  it('should have pointerEvents set to none', () => {
    Object.keys(Icon).map((key) => {
      const Component = Icon[key];
      const element = shallow(<Component />);
      // If a test breaks, uncomment this to see which icon is broken:
      // console.log(`${key}: ${element.props().style.pointerEvents}`);
      return expect(element.props().style.pointerEvents).to.equal('none');
    });
  });
});
