import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as InstrumentBadge, styles } from '../../../src/components/instrument-badge/instrument-badge';
import { mockClasses } from '../../../src';

describe('<InstrumentBadge />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  it('should render <div> as container', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} />);
    expect(wrapper.type()).to.equal('div');
  });

  it('should render instrument level and subtext', () => {
    wrapper = shallow(<InstrumentBadge instrumentLvl={2} subText={'Qualified!'} classes={classes} />);
    expect(wrapper.text()).to.equal('2Qualified!');
  });
  it('should render qualified when marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge qualified classes={classes} />);
    expect(wrapper.find(`.${classes.badgeSuccess}`).length).to.equal(1);
  });

  it('should NOT render qualified when NOT marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} />);
    expect(wrapper.find(`.${classes.badgeSuccess}`).length).to.equal(0);
  });
});
