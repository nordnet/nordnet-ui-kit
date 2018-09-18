import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Button, mockClasses } from '../../../src';
import { Component as Stepper, styles } from '../../../src/components/pagination/stepper/stepper';

describe('<Stepper />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    clickHandler: () => {},
    clickable: true,
  };

  const shallowComponent = customProps => shallow(<Stepper {...defaultProps} {...customProps} />);

  it('should render a link', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(Button).length).to.equal(1);
  });

  it('should render text from children prop', () => {
    const wrapper = shallowComponent({ children: 'Next' });

    expect(
      wrapper
        .find(Button)
        .childAt(0)
        .text(),
    ).to.equal('Next');
  });

  it('should render a disabledButton', () => {
    const wrapper = shallowComponent({ clickable: false });

    expect(wrapper.find(Button).props().disabled).to.equal(true);
  });

  it('should render a disabledButton', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ clickHandler: clickCallback });

    wrapper.find(Button).simulate('click');
    expect(clickCallback.calledOnce).to.equal(true);
  });
});
