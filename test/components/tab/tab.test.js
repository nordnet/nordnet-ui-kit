import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Component as Tab, styles } from '../../../src/components/tab/tab';
import { mockClasses } from '../../../src';

const classes = mockClasses(styles);

const defaultProps = {
  classes,
  children: 'label',
  selected: false,
  variant: 'primary',
  index: 0,
};

const renderComponent = props => shallow(<Tab {...defaultProps} {...props} />);

describe('<Tab />', () => {
  it('should render <li> as container', () => {
    const wrapper = renderComponent();
    const actual = wrapper.type();
    const expected = 'li';

    expect(actual).to.equal(expected);
  });

  it('should render role as presentation', () => {
    const wrapper = renderComponent();
    const actual = wrapper.props().role;
    const expected = 'presentation';

    expect(actual).to.equal(expected);
  });

  it('should render correct classes', () => {
    const wrapper = renderComponent({ variant: 'secondary' });
    const actual = wrapper.hasClass(`${classes.root} ${classes.secondary}`);
    const expected = true;

    expect(actual).to.equal(expected);
  });

  it('should render a button', () => {
    const wrapper = renderComponent({ singlePanel: true });
    const actual = wrapper.find('button').length;
    const expected = 1;

    expect(actual).to.equal(expected);
  });

  it('should render a link', () => {
    const wrapper = renderComponent({ singlePanel: false });
    const actual = wrapper.find('a').length;
    const expected = 1;

    expect(actual).to.equal(expected);
  });

  it('should render default href to link', () => {
    const wrapper = renderComponent({ singlePanel: false, index: 3 });
    const actual = wrapper.find('a').props().href;
    const expected = '#tabs-tab-3';

    expect(actual).to.equal(expected);
  });

  it('should override default href to link', () => {
    const wrapper = renderComponent({ singlePanel: false, index: 3, href: '#special' });
    const actual = wrapper.find('a').props().href;
    const expected = '#special';

    expect(actual).to.equal(expected);
  });

  it('should render a id', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.find('a').props().id;
    const expected = 'tabs-tab-2';

    expect(actual).to.equal(expected);
  });

  it('should render correct class', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.find('a').hasClass(classes.tab);
    const expected = true;

    expect(actual).to.equal(expected);
  });

  it('should have role as tab', () => {
    const wrapper = renderComponent({ index: 2 });
    const actual = wrapper.find('a').props().role;
    const expected = 'tab';

    expect(actual).to.equal(expected);
  });

  it('should have type button if element is a button', () => {
    const wrapper = renderComponent({ index: 1, singlePanel: true });
    const actual = wrapper.find('button').props().type;
    const expected = 'button';

    expect(actual).to.equal(expected);
  });

  it('should not have type button if element is a link', () => {
    const wrapper = renderComponent({ index: 1, singlePanel: false });
    const actual = wrapper.find('a').props().type;
    const expected = null;

    expect(actual).to.equal(expected);
  });

  it('should have aria-selected set to true', () => {
    const wrapper = renderComponent({ index: 1, selected: true });
    const actual = wrapper.find('a').props()['aria-selected'];
    const expected = true;

    expect(actual).to.equal(expected);
  });

  it('should have aria-selected set to false', () => {
    const wrapper = renderComponent({ index: 1, selected: false });
    const actual = wrapper.find('a').props()['aria-selected'];
    const expected = false;

    expect(actual).to.equal(expected);
  });

  it('should have onClick callback', () => {
    const spy = sinon.spy();
    const wrapper = renderComponent({ index: 1, changeHandler: spy });

    wrapper.find('a').simulate('click', { preventDefault: () => {} });

    expect(spy.calledOnce).to.equal(true);
  });

  it('should render content', () => {
    const wrapper = renderComponent({ index: 1, children: 'tab label' });
    const actual = wrapper
      .find('a')
      .childAt(0)
      .text();
    const expected = 'tab label';

    expect(actual).to.equal(expected);
  });
});
