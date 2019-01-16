import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Button } from '../../../src';
import ButtonNode from '../../../src/components/pagination/button-node';

describe('<ButtonNode />', () => {
  const defaultProps = {
    disabled: false,
    url: null,
    getNode: null,
    defaultNode: null,
    defaultProps: {},
  };

  const shallowComponent = customProps =>
    shallow(<ButtonNode {...defaultProps} {...customProps} />);

  it('should render a default button', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find('button').props().type).to.equal('button');
  });

  it('should render a default link', () => {
    const wrapper = shallowComponent({ url: '?page=4' });

    expect(wrapper.find('a').props().href).to.equal('?page=4');
  });

  it('should render a default button if disabled', () => {
    const wrapper = shallowComponent({ url: '?page=4', disabled: true });

    expect(wrapper.find('button').props().disabled).to.equal(true);
  });

  it('should render a default button with type prop if disabled', () => {
    const wrapper = shallowComponent({ url: '?page=4', disabled: true });

    expect(wrapper.find('button').props().type).to.equal('button');
  });

  it('should render Button component', () => {
    const wrapper = shallowComponent({ node: Button });

    expect(wrapper.find(Button).length).to.equal(1);
  });

  it('should render Button component from getNode function', () => {
    const wrapper = shallowComponent({ defaultNode: Button, getNode: () => <Button>test</Button> });

    expect(
      wrapper
        .find(Button)
        .childAt(0)
        .text(),
    ).to.equal('test');
  });
});
