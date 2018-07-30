import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as Li, styles } from '../../../src/components/li/li';

describe('<Li />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  it('should render an li', () => {
    wrapper = shallow(<Li classes={classes}>li1</Li>);
    const actual = wrapper.type();
    const expected = 'li';
    expect(actual).to.equal(expected);
  });
});
