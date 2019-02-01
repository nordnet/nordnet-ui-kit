import React from 'react';
import { shallow } from 'enzyme';
import Logo from './logo';

describe('<Logo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  test('should render a NordnetLogo', () => {
    expect(wrapper.find('NordnetLogo')).toHaveLength(1);
  });

  test('should have a default height', () => {
    expect(wrapper.prop('height')).toBe(27);
  });

  test('should be possible to customize the height', () => {
    const customHeight = 200;
    const newElement = shallow(<Logo height={customHeight} />);
    expect(newElement.prop('height')).toBe(customHeight);
  });

  test('should be possible to get just the icon and not the text', () => {
    const newElement = shallow(<Logo onlyIcon />);
    expect(newElement.prop('viewBox')).toBe('0 0 64 64');
  });
});
