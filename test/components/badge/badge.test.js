import React from 'react';
import { expect } from 'chai';
import { createShallow } from '../../../src/test-utils';
import Badge, { styleSheet } from '../../../src/components/badge/badge';

describe('<Badge />', () => {
  const shallow = createShallow();
  const classes = shallow.context.styleManager.render(styleSheet);
  let wrapper;

  it('should render <span> as container', () => {
    wrapper = shallow(<Badge />);
    expect(wrapper.type()).to.equal('span');
  });

  it('should have the class badge', () => {
    wrapper = shallow(<Badge />);
    expect(wrapper.hasClass(classes.badge)).to.equal(true);
  });

  it('should render children', () => {
    wrapper = shallow(<Badge>child</Badge>);
    expect(wrapper.contains('child')).to.equal(true);
  });

  it('should have class success when modifier = sucess', () => {
    wrapper = shallow(<Badge modifier="success" />);
    expect(wrapper.hasClass(classes.success)).to.equal(true);
  });

  it('should have class badge--danger with danger modifier', () => {
    wrapper = shallow(<Badge modifier="danger" />);
    expect(wrapper.hasClass(classes.danger)).to.equal(true);
  });

  it('should have class badge--warning with warning modifier', () => {
    wrapper = shallow(<Badge modifier="warning" />);
    expect(wrapper.hasClass(classes.warning)).to.equal(true);
  });

  it('should have 3 classes if a modifier and className is given', () => {
    wrapper = shallow(<Badge className="test" modifier="warning" />);
    expect(wrapper.hasClass(classes.badge)
    && wrapper.hasClass(classes.warning)
    && wrapper.hasClass('test')).to.equal(true);
  });
});
