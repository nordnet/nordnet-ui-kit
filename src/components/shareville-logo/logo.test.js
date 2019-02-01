import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SharevilleLogo from './shareville-logo';

describe('<SharevilleLogo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SharevilleLogo />);
  });

  it('should render a SharevilleLogo', () => {
    expect(wrapper.find('.svLogoGradientWtClass-1')).to.have.length(1);
  });

  it('should have a default height', () => {
    expect(wrapper.prop('height')).to.equal(27);
  });

  it('should be possible to customize the height', () => {
    const customHeight = 200;
    const newElement = shallow(<SharevilleLogo height={customHeight} />);
    expect(newElement.prop('height')).to.equal(customHeight);
  });

  it('should be possible to get just the icon and not the text', () => {
    const newElement = shallow(<SharevilleLogo onlyIcon />);
    expect(newElement.prop('viewBox')).to.equal('0 0 166.54 203.5');
  });
});
