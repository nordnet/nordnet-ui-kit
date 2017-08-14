import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Avatar, styles } from '../../../src/components/avatar/avatar';
import { mockClasses } from '../../../src/';

const classes = mockClasses(styles);

describe('<Avatar />', () => {
  const defaultProps = {
    classes,
    children: 'ISK',
  };
  it('should render a div', () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.type()).to.equal('div');
  });

  it('should have the class "root"', () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should have the class small by default', () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.hasClass(classes.sm)).to.equal(true);
  });

  it('should have the class md if size is set to "md"', () => {
    const wrapper = shallow(<Avatar {...defaultProps} size="md" />);
    expect(wrapper.hasClass(classes.md)).to.equal(true);
  });

  it('should have the class lg if size is set to "lg"', () => {
    const wrapper = shallow(<Avatar {...defaultProps} size="lg" />);
    expect(wrapper.hasClass(classes.lg)).to.equal(true);
  });

  it(`should render the text ${defaultProps.children}`, () => {
    const wrapper = shallow(<Avatar {...defaultProps} />);
    expect(wrapper.text()).to.equal(defaultProps.children);
  });

  it('should render a <Avatar /> with custom color', () => {
    const color = 'red';
    const wrapper = shallow(<Avatar {...defaultProps} color={color} />);
    expect(wrapper.prop('style').backgroundColor).to.equal(color);
  });

  it('should be possibe to send in a custom className', () => {
    const className = 'custom-class';
    const wrapper = shallow(<Avatar {...defaultProps} className={className} />);
    expect(wrapper.hasClass(className)).to.equal(true);
  });

  it('should be possibe to send in custom styles', () => {
    const fontSize = 10;
    const style = { fontSize };
    const wrapper = shallow(<Avatar {...defaultProps} style={style} />);
    expect(wrapper.prop('style').fontSize).to.equal(fontSize);
  });
});
