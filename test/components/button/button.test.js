import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as Button, styles } from '../../../src/components/button/button';

describe('<Button />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  it('should render <button> by default', () => {
    wrapper = shallow(<Button classes={classes}>Button</Button>);
    expect(wrapper.type()).to.equal('button');
  });

  ['primary', 'secondary', 'link'].forEach(variant => {
    it(`should have class ${classes[variant]} if variant is set to ${variant}`, () => {
      wrapper = shallow(<Button classes={classes} variant={variant}>Button</Button>);
      expect(wrapper.hasClass(classes[variant])).to.equal(true);
    });
  });

  ['danger', 'warning', 'success'].forEach(modifier => {
    it(`should have class ${modifier} if modifier is set to ${modifier}`, () => {
      wrapper = shallow(<Button classes={classes} modifier={modifier}>Button</Button>);
      expect(wrapper.hasClass(modifier)).to.equal(true);
    });
  });

  it('should render children', () => {
    wrapper = shallow(<Button classes={classes}>Button</Button>);
    expect(wrapper.childAt(0).text()).to.equal('Button');
  });

  it('should be disabled if prop disabled is set', () => {
    wrapper = shallow(<Button classes={classes} disabled>Button</Button>);
    expect(wrapper.props().disabled).to.equal(true);
  });

  it(`should have class icon for an icon button`, () => {
    const icon = <svg />;
    wrapper = shallow(<Button classes={classes} icon={icon} />);
    expect(wrapper.hasClass('icon')).to.equal(true);
  });

  it(`should have class iconText for a button with an icon`, () => {
    const icon = <svg />;
    wrapper = shallow(<Button classes={classes} icon={icon}>Button</Button>);
    expect(wrapper.hasClass('iconText')).to.equal(true);
  });
});
