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

  it('should default width to 1.6rem', () => {
    expect(wrapper.prop('style').width).to.equal('1.6rem');
  });

  it('should default width to 1.2rem', () => {
    expect(wrapper.prop('style').height).to.equal('1.2rem');
  });

  it('should have "flag flag--se" as className', () => {
    expect(wrapper.prop('className')).to.equal('flag flag--se');
  });
});
