import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Component as EditableInput, styles } from './editable-input';
import { mockClasses, Input, Button } from '../../';

describe('<EditableInput />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  it('should render component', () => {
    wrapper = shallow(<EditableInput classes={classes} />);

    expect(wrapper.type()).to.equal('div');
  });

  it('should render a span and edit button as default', () => {
    wrapper = shallow(<EditableInput classes={classes} />);

    const readOnly = wrapper.find(`.${classes.readOnly}`);
    const buttonEdit = wrapper.find(`.${classes.buttonEdit}`);

    expect(readOnly.length).to.equal(1);
    expect(buttonEdit.length).to.equal(1);
  });

  it('should toggle editing mode when edit button is clicked', () => {
    wrapper = shallow(<EditableInput classes={classes} />);
    expect(wrapper.state().editing).to.equal(false);

    const buttonEdit = wrapper.find(`.${classes.buttonEdit}`);
    buttonEdit.simulate('click');

    expect(wrapper.state().editing).to.equal(true);
  });

  it('should render input field and buttons when in editing mode', () => {
    wrapper = shallow(<EditableInput classes={classes} />);
    expect(wrapper.find(`.${classes.form}`).length).to.equal(0);
    expect(wrapper.find(`.${classes.buttons}`).length).to.equal(0);

    wrapper.setState({ editing: true });

    expect(wrapper.find(`.${classes.form}`).length).to.equal(1);
    expect(wrapper.find(`.${classes.buttons}`).length).to.equal(1);
  });

  it('should save the new input value when pressing submit button', () => {
    wrapper = shallow(<EditableInput classes={classes} />);
    wrapper.setState({
      editing: true,
      value: 'foo bar',
      originalValue: 'foo bar',
    });

    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: 'lorem ipsum' } });

    const submitButton = wrapper.find(Button).first();
    submitButton.simulate('click', { preventDefault: () => {} });

    expect(wrapper.state().value).to.equal('lorem ipsum');
  });

  it('should reset to the old value when pressing cancel button', () => {
    wrapper = shallow(<EditableInput classes={classes} />);
    wrapper.setState({
      editing: true,
      value: 'foo bar',
      originalValue: 'foo bar',
    });

    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: 'lorem ipsum' } });

    const submitButton = wrapper.find(Button).last();
    submitButton.simulate('click', { preventDefault: () => {} });

    expect(wrapper.state().value).to.equal('foo bar');
  });
});
