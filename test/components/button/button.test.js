import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src/test-utils';
import { Component as Button, styles } from '../../../src/components/button/button';
import { theme } from '../../../src/';

describe('<Button />', () => {
  const classes = mockClasses(styles(theme));
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
});
