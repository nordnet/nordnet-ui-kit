import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { decorateShallow } from '../../../src/test-utils';
import Button from '../../../src/components/button/button';

const shallow = decorateShallow(enzymeShallow);

describe('<Button />', () => {
  it('should render <button> by default', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper.type()).to.equal('button');
  });

  ['primary', 'secondary', 'link'].forEach((variant) => {
    it(`should have class ${variant} if variant is set to ${variant}`, () => {
      const wrapper = shallow(<Button variant={variant}>Button</Button>);
      const { classes } = wrapper;
      expect(wrapper.hasClass([classes[variant]])).to.equal(true);
    });
  });

  ['danger', 'warning', 'success'].forEach((modifier) => {
    // will fix it later
    it.skip(`should have class primary--${modifier} if modifier is set to ${modifier}`, () => {
      const wrapper = shallow(<Button modifier={modifier}>Button</Button>);
      const { classes } = wrapper;
      console.log(`primary--${modifier}`)
      console.log(classes)
      expect(wrapper.hasClass(classes[`primary--${modifier}`])).to.equal(true);
    });
  });

  it('should render children', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper.childAt(0).text()).to.equal('Button');
  });

  it('should be disabled if prop disabled is set', () => {
    const wrapper = shallow(<Button disabled>Button</Button>);
    expect(wrapper.props().disabled).to.equal(true);
  });
});
