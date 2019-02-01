import React from 'react';
import { shallow } from 'enzyme';
import { Component as HelpText, styles } from './help-text';
import { mockClasses, theme } from '../../';

const classes = mockClasses(styles);

const defaultProps = { classes, theme, children: 'HELP' };

const renderComponent = props => shallow(<HelpText {...defaultProps} {...props} />);

describe('<HelpText />', () => {
  test('has class help-text', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('help-text')).toBe(true);
  });

  test('has class classes[help-text]', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('help-text')).toBe(true);
  });

  test('has class classes.success when hasSuccess is set', () => {
    const wrapper = renderComponent({ hasSuccess: true });
    expect(wrapper.hasClass(classes.success)).toBe(true);
  });

  test('has class classes.warning when hasWarning is set', () => {
    const wrapper = renderComponent({ hasWarning: true });
    expect(wrapper.hasClass(classes.warning)).toBe(true);
  });

  test('has class classes.error when hasError is set', () => {
    const wrapper = renderComponent({ hasError: true });
    expect(wrapper.hasClass(classes.error)).toBe(true);
  });

  test('has class help-text--checkbox-radio when isCheckbox is set', () => {
    const wrapper = renderComponent({ isCheckbox: true });
    expect(wrapper.hasClass('help-text--checkbox-radio')).toBe(true);
  });

  test('has class help-text--checkbox-radio when isRadio is set', () => {
    const wrapper = renderComponent({ isRadio: true });
    expect(wrapper.hasClass('help-text--checkbox-radio')).toBe(true);
  });

  test('renders nothing if there are no children', () => {
    const wrapper = renderComponent({ children: undefined });
    expect(wrapper.type()).toBeNull();
  });
});
