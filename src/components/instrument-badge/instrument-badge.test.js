import React from 'react';
import { shallow } from 'enzyme';
import { Component as InstrumentBadge, styles } from './instrument-badge';
import Checkmark from '..//icon/icons/checkmark';
import ExclamationPoint from '../icon/icons/exclamationPoint';
import { mockClasses, theme } from '../../';

describe('<InstrumentBadge />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  test('should render <div> as container', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} theme={theme} />);
    expect(wrapper.type()).toBe('div');
  });

  test('should adapt classes to size small', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} size="sm" theme={theme} />);
    expect(wrapper.find(`.${classes.sm}`)).toHaveLength(1);
    expect(wrapper.find(`.${classes.md}`)).toHaveLength(0);
  });

  test('should adapt classes to size medium', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} size="md" theme={theme} />);
    expect(wrapper.find(`.${classes.sm}`)).toHaveLength(0);
    expect(wrapper.find(`.${classes.md}`)).toHaveLength(1);
  });

  test('should render checkmark icon when marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge qualified classes={classes} theme={theme} />);
    expect(wrapper.find(Checkmark)).toHaveLength(1);
    expect(wrapper.find(ExclamationPoint)).toHaveLength(0);
  });

  test('should render ExclamationPoint icon when NOT marked as qualified', () => {
    wrapper = shallow(<InstrumentBadge classes={classes} theme={theme} />);
    expect(wrapper.find(Checkmark)).toHaveLength(0);
    expect(wrapper.find(ExclamationPoint)).toHaveLength(1);
  });

  test('should render instrument level and subtext', () => {
    wrapper = shallow(<InstrumentBadge subText={'Qualified!'} classes={classes} theme={theme} />);
    expect(wrapper.find(`.${classes.subText}`).text()).toBe('Qualified!');
  });
});
