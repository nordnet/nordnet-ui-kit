import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Avatar, { styleSheet } from '../../../src/components/avatar/avatar';

describe('<Avatar />', () => {
  const inputText = 'ISK';
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(styleSheet);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Avatar>
        {inputText}
      </Avatar>,
    );
  });

  it('should render a div', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have the class "root"', () => {
    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should have the class small by default', () => {
    expect(wrapper.hasClass(classes.sm)).to.equal(true);
  });

  it('should have the class md if size is set to "md"', () => {
    wrapper = shallow(<Avatar size="md" />);
    expect(wrapper.hasClass(classes.md)).to.equal(true);
  });

  it('should have the class lg if size is set to "lg"', () => {
    wrapper = shallow(<Avatar size="lg" />);
    expect(wrapper.hasClass(classes.lg)).to.equal(true);
  });

  it(`should render the text ${inputText}`, () => {
    expect(wrapper.text()).to.equal(inputText);
  });

  it('should render a <Avatar /> with custom color', () => {
    const color = 'red';
    wrapper = shallow(<Avatar color={color} />);
    expect(wrapper.prop('style').backgroundColor).to.equal(color);
  });

  it('should be possibe to send in a custom className', () => {
    const className = 'custom-class';
    wrapper = shallow(<Avatar className={className} />);
    expect(wrapper.hasClass(className)).to.equal(true);
  });

  it('should be possibe to send in custom styles', () => {
    const fontSize = 10;
    const style = { fontSize };
    wrapper = shallow(<Avatar style={style} />);
    expect(wrapper.prop('style').fontSize).to.equal(fontSize);
  });
});
