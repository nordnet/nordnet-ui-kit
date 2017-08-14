import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../../src';
import { Component as Th, styles } from '../../../../src/components/th/th';

describe('<Th />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Th classes={classes} />);
  });

  it('should render a <th />', () => {
    expect(wrapper.type()).to.equal('th');
  });

  it(`should render a component with the ${classes.th} class`, () => {
    expect(wrapper.hasClass(classes.th)).to.equal(true);
  });

  it('should render a component with th--ellipsis by default', () => {
    expect(wrapper.find('.ellipsis')).to.have.length(1);
  });

  it('should not render a component with th--ellipsis, when ellipsis have false input', () => {
    wrapper = shallow(<Th classes={classes} ellipsis={false} />);
    expect(wrapper.find('.ellipsis')).to.have.length(0);
  });
});
