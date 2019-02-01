import React from 'react';
import { shallow } from 'enzyme';
import SharevilleLogo from './shareville-logo';

describe('<SharevilleLogo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SharevilleLogo />);
  });

  test('should render a SharevilleLogo', () => {
    expect(wrapper.find('.svLogoGradientWtClass-1')).toHaveLength(1);
  });

  test('should have a default height', () => {
    expect(wrapper.prop('height')).toBe(27);
  });

  test('should be possible to customize the height', () => {
    const customHeight = 200;
    const newElement = shallow(<SharevilleLogo height={customHeight} />);
    expect(newElement.prop('height')).toBe(customHeight);
  });

  test('should be possible to get just the icon and not the text', () => {
    const newElement = shallow(<SharevilleLogo onlyIcon />);
    expect(newElement.prop('viewBox')).toBe('0 0 166.54 203.5');
  });
});
