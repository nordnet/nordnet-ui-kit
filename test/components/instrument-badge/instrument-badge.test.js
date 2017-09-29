import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as InstrumentBadge, styles } from '../../../src/components/instrument-badge/instrument-badge';
import { mockClasses, theme } from '../../../src';

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

  it('should adapt classes to size', () => {
    expect(styles(theme).success.width({ size: 'sm' })).to.equal(13);
    expect(styles(theme).success.width({ size: 'md' })).to.equal(21);

    expect(styles(theme).hexTop.borderBottom({ size: 'md', qualified: true })).to.equal('12px solid #365299');
    expect(styles(theme).hexTop.borderBottom({ size: 'sm', qualified: false })).to.equal('7px solid #B9B6C2');
  });

  it('should render qualified when marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge qualified classes={classes} />);
    expect(wrapper.find(`.${classes.success}`).length).to.equal(1);
  });

  it('should NOT render qualified when NOT marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} />);
    expect(wrapper.find(`.${classes.success}`).length).to.equal(0);
  });

  it('should render backgroundCircle when specified', () => {
    wrapper = shallow(<InstrumentBadge backgroundCircle classes={classes} />);
    expect(wrapper.find(`.${classes.backgroundCircle}`).length).to.equal(1);
  });
});
