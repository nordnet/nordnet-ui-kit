import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../..';

describe('<Icon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon.ArrowLeft />);
  });

  test('should render an svg', () => {
    expect(wrapper.type()).toBe('svg');
  });

  test('should set default proportions', () => {
    expect(wrapper.prop('width')).toBe('1em');
    expect(wrapper.prop('height')).toBe('1em');
    expect(wrapper.prop('viewBox')).toBe('0 0 16 16');
  });

  test('should be able to override stroke', () => {
    const color = '#123456';
    wrapper = shallow(<Icon.Cloud stroke={color} />);
    expect(wrapper.find('g > g').prop('stroke')).toBe(color);
  });

  test('should be able to override fill', () => {
    const color = '#123456';
    wrapper = shallow(<Icon.Trash fill={color} />);
    expect(wrapper.find('g > g').prop('fill')).toBe(color);
  });

  test('should have pointerEvents set to none', () => {
    Object.keys(Icon).map(key => {
      const Component = Icon[key];
      const element = shallow(<Component />);
      // If a test breaks, uncomment this to see which icon is broken:
      // console.log(`${key}: ${element.props().style.pointerEvents}`);
      return expect(element.props().style.pointerEvents).toBe('none');
    });
  });
});
