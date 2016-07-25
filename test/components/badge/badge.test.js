import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Badge from '../../../src/components/badge/badge';

describe('<Badge />', () => {
  let wrapper;

  it('should render <span> as container', () => {
    wrapper = shallow(<Badge />);
    expect(wrapper.type()).to.equal('span');
  });

  it('should have the class badge', () => {
    wrapper = shallow(<Badge />);
    expect(wrapper.hasClass('badge')).to.equal(true);
  });

  it('should render children', () => {
    wrapper = shallow(<Badge>child</Badge>);
    expect(wrapper.contains('child')).to.equal(true);
  });

  it('should have class badge--success with success modifier', () => {
    wrapper = shallow(<Badge modifier="success" />);
    expect(wrapper.hasClass('badge--success')).to.equal(true);
  });

  it('should have class badge--danger with danger modifier', () => {
    wrapper = shallow(<Badge modifier="danger" />);
    expect(wrapper.hasClass('badge--danger')).to.equal(true);
  });

  it('should have class badge--warning with warning modifier', () => {
    wrapper = shallow(<Badge modifier="warning" />);
    expect(wrapper.hasClass('badge--warning')).to.equal(true);
  });

  it('should have 3 classes if a modifier and className is given', () => {
    wrapper = shallow(<Badge className="test" modifier="warning" />);
    expect(wrapper.hasClass('badge')
    && wrapper.hasClass('badge--warning')
    && wrapper.hasClass('test')).to.equal(true);
  });
});
