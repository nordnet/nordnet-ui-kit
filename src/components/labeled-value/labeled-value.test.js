import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../';
import { Component as LabeledValue, styles } from './labeled-value';

describe('<LabeledValue />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LabeledValue classes={classes} className="testclass" label="label">
        myvalue
      </LabeledValue>,
    );
  });

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have class root', () => {
    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should have input classname', () => {
    expect(wrapper.hasClass('testclass')).to.equal(true);
  });

  it('should render input child as value', () => {
    expect(
      wrapper
        .find(`span.${classes.value}`)
        .childAt(0)
        .text(),
    ).to.equal('myvalue');
  });

  it('should render input label', () => {
    expect(
      wrapper
        .find(`span.${classes.label}`)
        .childAt(0)
        .text(),
    ).to.equal('label');
  });

  it('should have value node with md as default size', () => {
    const valueNode = wrapper.find(`span.${classes.value}`).first();
    expect(valueNode.hasClass(classes['value-md'])).to.equal(true);
  });

  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    it(`value should have class "value-${size}" if prop size is ${size}`, () => {
      wrapper.setProps({ size });
      const valueNode = wrapper.find(`span.${classes.value}`).first();
      expect(valueNode.hasClass(classes[`value-${size}`])).to.equal(true);
    });
  });
});
