import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as HelpText, styles } from '../../../src/components/input/help-text';
import { mockClasses, theme } from '../../../src';

const classes = mockClasses(styles);

const defaultProps = { classes, theme, children: 'HELP' };

const renderComponent = props => shallow(<HelpText {...defaultProps} {...props} />);

describe('<HelpText />', () => {
  it('has class help-text', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('help-text')).to.equal(true);
  });

  it('has class classes[help-text]', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('help-text')).to.equal(true);
  });

  it('has class classes.success when hasSuccess is set', () => {
    const wrapper = renderComponent({ hasSuccess: true });
    expect(wrapper.hasClass(classes.success)).to.equal(true);
  });

  it('has class classes.warning when hasWarning is set', () => {
    const wrapper = renderComponent({ hasWarning: true });
    expect(wrapper.hasClass(classes.warning)).to.equal(true);
  });

  it('has class classes.error when hasError is set', () => {
    const wrapper = renderComponent({ hasError: true });
    expect(wrapper.hasClass(classes.error)).to.equal(true);
  });

  it('has class help-text--checkbox-radio when isCheckbox is set', () => {
    const wrapper = renderComponent({ isCheckbox: true });
    expect(wrapper.hasClass('help-text--checkbox-radio')).to.equal(true);
  });

  it('has class help-text--checkbox-radio when isRadio is set', () => {
    const wrapper = renderComponent({ isRadio: true });
    expect(wrapper.hasClass('help-text--checkbox-radio')).to.equal(true);
  });

  it('renders nothing if there are no children', () => {
    const wrapper = renderComponent({ children: undefined });
    expect(wrapper.type()).to.equal(null);
  });
});
