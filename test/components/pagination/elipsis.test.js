import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as Ellipsis, styles } from '../../../src/components/pagination/ellipsis/ellipsis';

describe('<Ellipsis />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
  };
  const shallowComponent = customProps => shallow(<Ellipsis {...defaultProps} {...customProps} />);

  it('should render a li element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`li.${classes.item}`).length).to.equal(1);
  });

  it('should not render a li element with class hiddenOnDesktop', () => {
    const wrapper = shallowComponent({ hiddenOnDesktop: false });

    expect(wrapper.find(`li.${classes.item}.${classes.hiddenOnDesktop}`).length).to.equal(0);
  });

  it('should render a li element with class hiddenOnDesktop', () => {
    const wrapper = shallowComponent({ hiddenOnDesktop: true });

    expect(wrapper.find(`li.${classes.item}.${classes.hiddenOnDesktop}`).length).to.equal(1);
  });

  it('should render ...', () => {
    const wrapper = shallowComponent({ children: 'Next' });

    expect(wrapper.childAt(0).text()).to.equal('...');
  });
});
