import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Button from '../../../src/components/button';
import ButtonStyles from '../../../src/components/button/button-styles';

describe('<Button />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(ButtonStyles);
  let wrapper;

  it('should render <button> by default', () => {
    wrapper = shallow(<Button>Button</Button>);
    expect(wrapper.type()).to.equal('button');
  });

  ['primary', 'secondary', 'link'].forEach((variant) => {
    it(`should have class ${classes[variant]} if variant is set to ${variant}`, () => {
      wrapper = shallow(<Button variant={variant}>Button</Button>);
      expect(wrapper.hasClass(classes[variant])).to.equal(true);
    });
  });

  ['danger', 'warning', 'success'].forEach((modifier) => {
    it(`should have class ${modifier} if modifier is set to ${modifier}`, () => {
      wrapper = shallow(<Button modifier={modifier}>Button</Button>);
      expect(wrapper.hasClass(modifier)).to.equal(true);
    });
  });

  it('should render children', () => {
    wrapper = shallow(<Button>Button</Button>);
    expect(wrapper.childAt(0).text()).to.equal('Button');
  });

  it('should be disabled if prop disabled is set', () => {
    wrapper = shallow(<Button disabled>Button</Button>);
    expect(wrapper.props().disabled).to.equal(true);
  });
});
