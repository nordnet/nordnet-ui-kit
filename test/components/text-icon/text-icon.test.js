import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import TextIcon, { styleSheet } from '../../../src/components/text-icon/text-icon';

describe('<TextIcon />', () => {
  const inputText = 'ISK';
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(styleSheet);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TextIcon text={inputText} />);
  });

  it('should render a div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have the class "root"', () => {
    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should have the class small by default', () => {
    expect(wrapper.hasClass(classes.small)).to.equal(true);
  });

  it('should have the class large if iconSize is set to "large"', () => {
    wrapper = shallow(<TextIcon iconSize="large" />);
    expect(wrapper.hasClass(classes.large)).to.equal(true);
  });

  it('should not have large or small classes if iconSize is set to "custom"', () => {
    wrapper = shallow(<TextIcon iconSize="custom" />);
    expect(wrapper.hasClass(classes.large)).to.equal(false);
    expect(wrapper.hasClass(classes.small)).to.equal(false);
  });

  it(`should render the text ${inputText}`, () => {
    expect(wrapper.text()).to.equal(inputText);
  });

  it('should render a <TextIcon /> with custom textColor', () => {
    const textColor = 'red';
    wrapper = shallow(<TextIcon textColor={textColor} />);
    expect(wrapper.prop('style').color).to.equal(textColor);
  });

  it('should render a <TextIcon /> with custom iconColor', () => {
    const iconColor = 'red';
    wrapper = shallow(<TextIcon iconColor={iconColor} />);
    expect(wrapper.prop('style').backgroundColor).to.equal(iconColor);
  });

  it('should be possibe to send in a custom className', () => {
    const className = 'custom-class';
    wrapper = shallow(<TextIcon className={className} />);
    expect(wrapper.hasClass(className)).to.equal(true);
  });

  it('should be possibe to send in custom styles', () => {
    const fontSize = 10;
    const style = { fontSize };
    wrapper = shallow(<TextIcon style={style} />);
    expect(wrapper.prop('style').fontSize).to.equal(fontSize);
  });
});
