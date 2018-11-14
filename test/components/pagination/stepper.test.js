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
    disabled: false,
    url: '?page=4',
  };

  const shallowComponent = customProps => shallow(<Stepper {...defaultProps} {...customProps} />);

  it('should render Button component', () => {
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

  it('should render a disabled Button', () => {
    const wrapper = shallowComponent({ disabled: true });

    expect(wrapper.find(Button).props().disabled).to.equal(true);
  });

  it('should render a custom element if getNode is provided', () => {
    const wrapper = shallowComponent({
      disabled: false,
      getNode: (url, children, rest) => <Button {...rest}>{children}</Button>,
    });

    expect(wrapper.find(Button).length).to.equal(1);
  });

  it('should render a url to Button', () => {
    const wrapper = shallowComponent({ disabled: false, url: '?page=1' });

    expect(wrapper.find(Button).props().href).to.equal('?page=1');
  });

  it('getNode element can have custom prop', () => {
    const wrapper = shallowComponent({
      disabled: false,
      url: '?page=5',
      getNode: (url, children, rest) => (
        <Button to={url} {...rest}>
          {children}
        </Button>
      ),
    });

    expect(wrapper.find(Button).props().to).to.equal('?page=5');
  });

  it('should render type if Button is disabled', () => {
    const wrapper = shallowComponent({ disabled: true });

    expect(wrapper.find(Button).props().type).to.equal('button');
  });

  it('should render a run callback on click', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallowComponent({ clickHandler: clickCallback });

    wrapper.find(Button).simulate('click');
    expect(clickCallback.calledOnce).to.equal(true);
  });
});
