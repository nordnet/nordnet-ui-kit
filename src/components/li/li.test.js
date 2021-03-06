import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../..';
import { Component as Li, styles } from './li';

describe('<Li />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  test('should render an li', () => {
    wrapper = shallow(<Li classes={classes}>li1</Li>);
    const actual = wrapper.type();
    const expected = 'li';
    expect(actual).toBe(expected);
  });
});
