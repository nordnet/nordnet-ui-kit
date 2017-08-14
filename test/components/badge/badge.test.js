import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Badge, styles } from '../../../src/components/badge/badge';
import { mockClasses } from '../../../src';

describe('<Badge />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  it('should render <span> as container', () => {
    wrapper = shallow(<Badge classes={classes} />);
    expect(wrapper.type()).to.equal('span');
  });

  it('should have the class root', () => {
    wrapper = shallow(<Badge classes={classes} />);
    expect(wrapper.hasClass(classes.root)).to.equal(true);
  });

  it('should render children', () => {
    wrapper = shallow(<Badge classes={classes}>child</Badge>);
    expect(wrapper.contains('child')).to.equal(true);
  });

  it('should have class success when modifier = sucess', () => {
    wrapper = shallow(<Badge classes={classes} modifier="success" />);
    expect(wrapper.hasClass(classes.success)).to.equal(true);
  });

  it('should have class badge--danger with danger modifier', () => {
    wrapper = shallow(<Badge classes={classes} modifier="danger" />);
    expect(wrapper.hasClass(classes.danger)).to.equal(true);
  });

  it('should have class badge--warning with warning modifier', () => {
    wrapper = shallow(<Badge classes={classes} modifier="warning" />);
    expect(wrapper.hasClass(classes.warning)).to.equal(true);
  });

  it('should have 3 classes if a modifier and className is given', () => {
    wrapper = shallow(<Badge classes={classes} className="test" modifier="warning" />);
    expect(wrapper.hasClass(classes.root) && wrapper.hasClass(classes.warning) && wrapper.hasClass('test')).to.equal(true);
  });
});
