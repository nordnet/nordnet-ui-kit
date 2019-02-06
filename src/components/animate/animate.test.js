import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { shallow } from 'enzyme';
import { Component as Animate, styles } from './animate';
import { mockClasses } from '../..';

describe('<Animate />', () => {
  const defaultProps = {
    type: 'height',
    classes: mockClasses(styles),
    children: 'ISK',
  };

  test('should render a TransitionGroup', () => {
    const wrapper = shallow(<Animate {...defaultProps} />);
    expect(wrapper.type()).toBe(TransitionGroup);
  });
});
