import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as InstrumentBadge, styles } from '../../../src/components/instrument-badge/instrument-badge';
import Checkmark from '../../../src/components/icon/icons/checkmark';
import ExclamationPoint from '../../../src/components/icon/icons/exclamationPoint';
import { mockClasses, theme } from '../../../src';

describe('<InstrumentBadge />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  it('should render <div> as container', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} theme={theme} />);
    expect(wrapper.type()).to.equal('div');
  });

  it('should adapt classes to size small', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} size="sm" theme={theme} />);
    expect(wrapper.find(`.${classes.sm}`).length).to.equal(1);
    expect(wrapper.find(`.${classes.md}`).length).to.equal(0);
  });

  it('should adapt classes to size medium', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} size="md" theme={theme} />);
    expect(wrapper.find(`.${classes.sm}`).length).to.equal(0);
    expect(wrapper.find(`.${classes.md}`).length).to.equal(1);
  });

  it('should render checkmark icon when marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge qualified classes={classes} theme={theme} />);
    expect(wrapper.find(Checkmark).length).to.equal(1);
    expect(wrapper.find(ExclamationPoint).length).to.equal(0);
  });

  it('should render close icon when NOT marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} theme={theme} />);
    expect(wrapper.find(Checkmark).length).to.equal(0);
    expect(wrapper.find(ExclamationPoint).length).to.equal(1);
  });

  it('should render instrument level and subtext', () => {
    wrapper = shallow(<InstrumentBadge subText={'Qualified!'} classes={classes} theme={theme} />);
    expect(wrapper.find(`.${classes.subText}`).text()).to.equal('Qualified!');
  });
});
