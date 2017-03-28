import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TextIcon from '../../../src/components/text-icon/text-icon';

describe('<TextIcon />', () => {
  const inputText = 'ISK';
  it(`should render a <TextIcon /> with text ${inputText} and default colors`, () => {
    const wrapper = shallow(<TextIcon text={inputText} />);
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.find('.text-icon').text()).to.equal(inputText);
  });

  it('should render a <TextIcon /> with custom colors', () => {
    const color1 = 'red';
    const color2 = 'black';
    const wrapper = shallow(<TextIcon textColor={color1} iconColor={color2} />);
    expect(wrapper.find('.text-icon')).to.have.length(1);
    expect(wrapper.find('.text-icon').prop('style').color).to.equal(color1);
    expect(wrapper.find('.text-icon').prop('style').backgroundColor).to.equal(color2);
  });
});
