import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Ul } from './ul';

describe('<Ul />', () => {
  let wrapper;

  it('should render an ul', () => {
    wrapper = shallow(<Ul />);
    const actual = wrapper.type();
    const expected = 'ul';
    expect(actual).to.equal(expected);
  });

  it('should render its children', () => {
    const child = <li>child</li>;
    wrapper = shallow(<Ul>{child}</Ul>);
    const actual = wrapper.find('li');
    const expected = 1;
    expect(actual).to.have.length(expected);
  });
});
