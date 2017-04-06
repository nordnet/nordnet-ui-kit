import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import decorateShallow from '../../../src/test-utils/decorate-shallow';
import Badge from '../../../src/components/badge/';

const shallow = decorateShallow(enzymeShallow);

describe('<Badge />', () => {
  it('should render <span> as container', () => {
    const wrapper = shallow(<Badge />);
    expect(wrapper.type()).to.equal('span');
  });

  it('should have the class badge', () => {
    const wrapper = shallow(<Badge />);
    const { classes } = wrapper;
    expect(wrapper.hasClass(classes.badge)).to.equal(true);
  });

  it('should render children', () => {
    const child = 'child';
    const wrapper = shallow(<Badge>{ child }</Badge>);
    expect(wrapper.contains(child)).to.equal(true);
  });
});
