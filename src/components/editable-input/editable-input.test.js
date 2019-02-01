import React from 'react';
import { shallow } from 'enzyme';

import { Component as EditableInput, styles } from './editable-input';
import { mockClasses, Input, Button } from '../../';

describe('<EditableInput />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  test('should render component', () => {
    wrapper = shallow(<EditableInput classes={classes} />);

    expect(wrapper.type()).toBe('div');
  });

  test('should render a span and edit button as default', () => {
    wrapper = shallow(<EditableInput classes={classes} />);

    const readOnly = wrapper.find(`.${classes.readOnly}`);
    const buttonEdit = wrapper.find(`.${classes.buttonEdit}`);

    expect(readOnly.length).toBe(1);
    expect(buttonEdit.length).toBe(1);
  });

  test('should toggle editing mode when edit button is clicked', () => {
    wrapper = shallow(<EditableInput classes={classes} />);
    expect(wrapper.state().editing).toBe(false);

    const buttonEdit = wrapper.find(`.${classes.buttonEdit}`);
    buttonEdit.simulate('click');

    expect(wrapper.state().editing).toBe(true);
  });

  test('should render input field and buttons when in editing mode', () => {
    wrapper = shallow(<EditableInput classes={classes} />);
    expect(wrapper.find(`.${classes.form}`).length).toBe(0);
    expect(wrapper.find(`.${classes.buttons}`).length).toBe(0);

    wrapper.setState({ editing: true });

    expect(wrapper.find(`.${classes.form}`).length).toBe(1);
    expect(wrapper.find(`.${classes.buttons}`).length).toBe(1);
  });

  test('should save the new input value when pressing submit button', () => {
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

    expect(wrapper.state().value).toBe('lorem ipsum');
  });

  test('should reset to the old value when pressing cancel button', () => {
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

    expect(wrapper.state().value).toBe('foo bar');
  });
});
