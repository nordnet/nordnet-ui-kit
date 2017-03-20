import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import TextIcon from '../../../src/components/text-icon/text-icon';

describe('<TextIcon />', () => {
  const inputText = 'ISK';
  it(`should render a <TextIcon /> with text ${inputText} and default colors`, () => {
    const wrapper = shallow(<TextIcon text={ inputText } />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.find('.icon').text()).to.equal(inputText);
  });

  it('should have 1 icon class and default text color to white', () => {
    const wrapper = shallow(<TextIcon color={ 'red' } />);
    expect(wrapper.find('.icon')).to.have.length(1);
    expect(wrapper.find('.icon').prop('style').color).to.equal('white');
  });

  it('should have color red and textColor black', () => {
    const wrapper = mount(<TextIcon color={ 'red' } textColor={ 'black' } />);
    expect(wrapper.find('.icon').prop('style').color).to.equal('black');
    expect(wrapper.find('.icon').prop('style').backgroundColor).to.equal('red');
  });
});
