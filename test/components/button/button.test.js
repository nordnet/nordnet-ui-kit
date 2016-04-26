import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../../../src/components/button/button';

describe('<Button />', () => {
  it('should render <button> by default', () => {
    const component = shallow(<Button>Hello</Button>);
    expect(component.type()).to.equal('button');
  });

  it('should use "primary" prop', () => {
    const component = shallow(<Button primary>Hello</Button>);
    expect(component.hasClass('btn-primary')).to.equal(true);
  });

  it('should use "secondary" prop', () => {
    const component = shallow(<Button secondary>Hello</Button>);
    expect(component.hasClass('btn-secondary')).to.equal(true);
  });

  it('should use variant "primary" prop', () => {
    const component = shallow(<Button variant="primary">Hello</Button>);
    expect(component.hasClass('btn-primary')).to.equal(true);
  });

  it('should use variant "secondary" prop', () => {
    const component = shallow(<Button variant="secondary">Hello</Button>);
    expect(component.hasClass('btn-secondary')).to.equal(true);
  });
});
