import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flag from '../../../src/components/flag/flag';

describe('<Flag />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Flag countryCode="se" />);
  });

  it('should have the class "flag"', () => {
    expect(wrapper.hasClass('flag')).to.equal(true);
  });

  it('should scale according to size', () => {
    const newElement = shallow(<Flag countryCode="se" size={64} />);
    expect(newElement.prop('style').width).to.equal(64);
  });

  it('should be possible to show combined flag for currencies', () => {
    const currencyElement = shallow(
      <Flag countryCode="us" secondaryCountryCode="se" />,
    );
    expect(currencyElement.html()).to.not.equal(null);
  });
});
