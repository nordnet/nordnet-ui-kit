import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Logo from '../../../src/components/logo/logo';

describe('<Logo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render a NordnetLogo', () => {
    expect(wrapper.find('NordnetLogo')).to.have.length(1);
  });

  it('should have a default width', () => {
    expect(wrapper.prop('width')).to.equal(130);
  });

  it('should be possible to customize the width', () => {
    const customWidth = 200;
    const newElement = shallow(<Logo width={customWidth} />);
    expect(newElement.prop('width')).to.equal(customWidth);
  });
});
