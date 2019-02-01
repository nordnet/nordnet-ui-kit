import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Button, mockClasses } from '../../..';
import { Component as Stepper, styles } from './stepper';
import ButtonNode from '../button-node';

describe('<Stepper />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    clickHandler: () => {},
    disabled: false,
    url: '?page=4',
    getNode: () => {},
  };

  const shallowComponent = customProps => shallow(<Stepper {...defaultProps} {...customProps} />);

  it('should render ButtonNode component', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).length).to.equal(1);
  });

  it('should have node prop as Button component', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).props().node).to.equal(Button);
  });

  it('should have getNode prop in ButtonNode component', () => {
    const testFunc = () => true;
    const wrapper = shallowComponent({ getNode: testFunc });

    expect(wrapper.find(ButtonNode).props().getNode).to.equal(testFunc);
  });

  it('should render url prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ url: 'www.test.com' });

    expect(wrapper.find(ButtonNode).props().url).to.equal('www.test.com');
  });

  it('should render disabled prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ disabled: true });

    expect(wrapper.find(ButtonNode).props().disabled).to.equal(true);
  });

  it('should have variant in defaultProps', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).props().defaultProps.variant).to.equal('link');
  });

  it('should have modifier in defaultProps', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(ButtonNode).props().defaultProps.modifier).to.equal('action');
  });
});
