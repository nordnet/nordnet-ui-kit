import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Li from '../../../../src/components/li';

describe('<Li />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Li>Test</Li>);
  });

  it('should render a <li />', () => {
    expect(wrapper.type()).to.equal('li');
  });

  it('should render a component with li', () => {
    expect(wrapper.find('.li')).to.have.length(1);
  });
});
