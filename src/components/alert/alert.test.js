import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as Alert, styles } from './alert';
import { mockClasses, theme } from '../..';

const classes = mockClasses(styles);

const defaultProps = { classes, theme };

describe('<Alert />', () => {
  test('should render <div> as container', () => {
    const wrapper = shallow(
      <Alert header="header" {...defaultProps}>
        body
      </Alert>,
    );
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toBe(expected);
  });

  test('should have class alert', () => {
    const wrapper = shallow(
      <Alert header="header" {...defaultProps}>
        body
      </Alert>,
    );
    const actual = wrapper.hasClass(classes.alert);
    expect(actual).toBe(true);
  });

  ['success', 'warning', 'danger'].forEach(modifier => {
    test(`should have class ${classes[modifier]} if modifier is set to ${modifier}`, () => {
      const wrapper = shallow(
        <Alert header="header" {...defaultProps}>
          body
        </Alert>,
      );
      wrapper.setProps({ modifier });
      const actual = wrapper.hasClass(`${classes[modifier]}`);
      expect(actual).toBe(true);
    });
  });

  test('should render the header if provided', () => {
    const wrapper = shallow(
      <Alert header="header" {...defaultProps}>
        body
      </Alert>,
    );
    const actual = wrapper
      .find(`div.${classes.header}`)
      .childAt(0)
      .text();
    const expected = 'header';
    expect(actual).toBe(expected);
  });

  test('should render the children if provided', () => {
    const wrapper = shallow(
      <Alert header="header" {...defaultProps}>
        body
      </Alert>,
    );
    const actual = wrapper
      .find(`div.${classes.body}`)
      .childAt(0)
      .text();
    const expected = 'body';
    expect(actual).toBe(expected);
  });

  test('should close if the dismiss button is clicked', () => {
    const wrapper = shallow(
      <Alert header="header" {...defaultProps}>
        body
      </Alert>,
    );
    wrapper.find(`button.${classes.close}`).simulate('click');
    const actual = wrapper.html();
    const expected = null;
    expect(actual).toBe(expected);
  });

  test('should not render the dismiss button if dismissable is set to false', () => {
    const wrapper = shallow(
      <Alert header="header" {...defaultProps}>
        body
      </Alert>,
    );
    wrapper.setProps({ dismissable: false });
    const actual = wrapper.find(`button.${classes.close}`).exists();
    expect(actual).toBe(false);
  });

  test('should call dismissedCallback when dismissed', () => {
    const spy = sinon.spy();
    const wrapper = shallow(
      <Alert {...defaultProps} dismissedCallback={spy}>
        body
      </Alert>,
    );
    wrapper.find(`button.${classes.close}`).simulate('click');
    expect(spy.calledOnce).toBe(true);
  });

  test('should not call dismissedCallback when not dismissed', () => {
    const spy = sinon.spy();
    shallow(
      <Alert {...defaultProps} dismissedCallback={spy}>
        body
      </Alert>,
    );
    expect(spy.called).toBe(false);
  });
});
