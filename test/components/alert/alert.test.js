import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Component as Alert, styles } from '../../../src/components/alert/alert';
import { mockClasses, theme } from '../../../src';

const classes = mockClasses(styles);

const defaultProps = { classes, theme };

describe('<Alert />', () => {
  it('should render <div> as container', () => {
    const wrapper = shallow(<Alert header="header" {...defaultProps}>body</Alert>);
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).to.equal(expected);
  });

  it('should have class alert', () => {
    const wrapper = shallow(<Alert header="header" {...defaultProps}>body</Alert>);
    const actual = wrapper.hasClass(classes.alert);
    expect(actual).to.equal(true);
  });

  ['success', 'warning', 'danger'].forEach(modifier => {
    it(`should have class ${classes[modifier]} if modifier is set to ${modifier}`, () => {
      const wrapper = shallow(<Alert header="header" {...defaultProps}>body</Alert>);
      wrapper.setProps({ modifier });
      const actual = wrapper.hasClass(`${classes[modifier]}`);
      expect(actual).to.equal(true);
    });
  });

  it('should render the header if provided', () => {
    const wrapper = shallow(<Alert header="header" {...defaultProps}>body</Alert>);
    const actual = wrapper.find(`div.${classes.header}`).childAt(0).text();
    const expected = 'header';
    expect(actual).to.equal(expected);
  });

  it('should render the children if provided', () => {
    const wrapper = shallow(<Alert header="header" {...defaultProps}>body</Alert>);
    const actual = wrapper.find(`div.${classes.body}`).childAt(0).text();
    const expected = 'body';
    expect(actual).to.equal(expected);
  });

  it('should close if the dismiss button is clicked', () => {
    const wrapper = shallow(<Alert header="header" {...defaultProps}>body</Alert>);
    wrapper.find(`button.${classes.close}`).simulate('click');
    const actual = wrapper.html();
    const expected = null;
    expect(actual).to.equal(expected);
  });

  it('should not render the dismiss button if dismissable is set to false', () => {
    const wrapper = shallow(<Alert header="header" {...defaultProps}>body</Alert>);
    wrapper.setProps({ dismissable: false });
    const actual = wrapper.find(`button.${classes.close}`).exists();
    expect(actual).to.equal(false);
  });
});
