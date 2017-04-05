import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flag from '../../../src/components/flag/flag';

describe('<Flag />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Flag countryCode="se" />);
  });

  it('should render a span', () => {
    expect(wrapper.type()).to.equal('span');
  });

  it('should render a span', () => {
    const newElement = shallow(<Flag countryCode="se" size={64} />);
    expect(newElement.prop('style').width).to.equal('64px');
  });
});
