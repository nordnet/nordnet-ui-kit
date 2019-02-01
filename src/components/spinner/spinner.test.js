import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses, theme } from '../../';
import { Component as Spinner, styles } from './spinner';

describe('<Spinner />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner classes={classes} theme={theme} />);
  });

  test('should render <span> as container', () => {
    expect(wrapper.type()).toBe('span');
  });

  test(`should have the class ${classes.spinner}`, () => {
    expect(wrapper.hasClass(classes.spinner)).toBe(true);
  });

  test('should have a height of 16', () => {
    expect(wrapper.prop('style').width).toBe(16);
  });

  test('should have a width of 16', () => {
    expect(wrapper.prop('style').height).toBe(16);
  });

  describe('<Spinner size={ 100 } />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner classes={classes} theme={theme} size={100} />);
    });

    test('should have a height of 100', () => {
      expect(wrapper.prop('style').width).toBe(100);
    });

    test('should have a width of 10px', () => {
      expect(wrapper.prop('style').height).toBe(100);
    });
  });

  describe('<Spinner gradientStops={ 90 } />', () => {
    beforeEach(() => {
      wrapper = shallow(<Spinner classes={classes} theme={theme} gradientStops={90} />);
    });

    test('should have 90 gradient stops in total', () => {
      expect(wrapper.find('.spinner__gradient rect')).toHaveLength(90);
    });
  });
});
