import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { decorateShallow } from '../../../src/test-utils';
import Badge from '../../../src/components/badge/badge';

const shallow = decorateShallow(enzymeShallow);
// console.log(Badge)

describe.only('<Badge />', () => {
  it('should render <span> as container', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.type()).to.equal('span');
  });

  it('should have the class root', () => {
    const wrapper = shallow(<Badge />);
    const { classes } = wrapper;
    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should render children', () => {
    const wrapper = shallow(<Badge>child</Badge>);
    expect(wrapper.contains('child')).to.equal(true);
  });

  it('should have class success when modifier = sucess', () => {
    const wrapper = shallow(<Badge modifier="success" />);
    const { classes } = wrapper;
    expect(wrapper.hasClass(classes.success)).to.equal(true);
  });

  it('should have class badge--danger with danger modifier', () => {
    const wrapper = shallow(<Badge modifier="danger" />);
    const { classes } = wrapper;
    expect(wrapper.hasClass(classes.danger)).to.equal(true);
  });

  it('should have class badge--warning with warning modifier', () => {
    const wrapper = shallow(<Badge modifier="warning" />);
    const { classes } = wrapper;
    expect(wrapper.hasClass(classes.warning)).to.equal(true);
  });

  it('should have 3 classes if a modifier and className is given', () => {
    const wrapper = shallow(<Badge className="test" modifier="warning" />);
    const { classes } = wrapper;
    expect(wrapper.hasClass(classes.root)
    && wrapper.hasClass(classes.warning)
    && wrapper.hasClass('test')).to.equal(true);
  });
});
