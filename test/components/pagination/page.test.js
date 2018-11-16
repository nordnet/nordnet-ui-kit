import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as Page, styles } from '../../../src/components/pagination/page/page';
import ButtonNode from '../../../src/components/pagination/buttonNode';

describe('<Page />', () => {
  const classes = mockClasses(styles);
  const defaultProps = {
    classes,
    isSelected: false,
    isFirst: false,
    isLast: false,
    pageNumber: 2,
    labelText: '',
    url: '',
    selectHandler: () => {},
  };

  const shallowComponent = customProps => shallow(<Page {...defaultProps} {...customProps} />);

  it('should render a li element', () => {
    const wrapper = shallowComponent();

    expect(wrapper.find(`li.${classes.item}`).length).to.equal(1);
  });

  it('should render a li element with class itemAlwaysVisible if page is selected', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).to.equal(true);
  });

  it('should render a li element with class itemAlwaysVisible if page is first', () => {
    const wrapper = shallowComponent({ isFirst: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).to.equal(true);
  });

  it('should render a li element with class itemAlwaysVisible if page is last', () => {
    const wrapper = shallowComponent({ isLast: true });

    expect(wrapper.find(`li.${classes.item}`).hasClass(classes.itemAlwaysVisible)).to.equal(true);
  });

  it('should render a ButtonNode component', () => {
    const wrapper = shallowComponent({ isLast: true });

    expect(wrapper.find(ButtonNode).length).to.equal(1);
  });

  it('should render disabled prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ isSelected: true });

    expect(wrapper.find(ButtonNode).props().disabled).to.equal(true);
  });

  it('should not render disabled prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ isSelected: false });

    expect(wrapper.find(ButtonNode).props().disabled).to.equal(false);
  });

  it('should render url prop to ButtonNode component', () => {
    const wrapper = shallowComponent({ url: 'www.test.com' });

    expect(wrapper.find(ButtonNode).props().url).to.equal('www.test.com');
  });

  it('should have getNode prop in ButtonNode component', () => {
    const testFunc = () => true;
    const wrapper = shallowComponent({ getNode: testFunc });

    expect(wrapper.find(ButtonNode).props().getNode).to.equal(testFunc);
  });

  it('should have aria-label text in defaultProps', () => {
    const wrapper = shallowComponent({ labelText: 'Go to page' });

    expect(wrapper.find(ButtonNode).props().defaultProps['aria-label']).to.equal('Go to page');
  });
});
