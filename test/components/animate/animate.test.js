import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Animate, styles } from '../../../src/components/animate/animate';
import { mockClasses } from '../../../src';

describe('<Animate />', () => {
  const defaultProps = {
    type: 'height',
    classes: mockClasses(styles),
    children: 'ISK',
  };

  it('should render a TransitionGroup', () => {
    const wrapper = shallow(<Animate {...defaultProps} />);
    expect(wrapper.type()).to.equal(TransitionGroup);
  });
});
