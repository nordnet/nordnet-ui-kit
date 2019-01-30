import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {
  Component as SegmentedControl,
  styles,
} from '../../../src/components/segmented-control/segmented-control';
import { mockClasses, theme } from '../../../src';

const classes = mockClasses(styles);

const defaultProps = {
  classes,
  theme,
  value: 1,
  name: 'segmented-control',
  type: 'radio',
  children: [<span value={1}>1</span>],
};

const renderComponent = props => shallow(<SegmentedControl {...defaultProps} {...props} />);

describe('<SegmentedControl />', () => {
  it('should render <span> as container', () => {
    const wrapper = renderComponent();
    const actual = wrapper.type();
    const expected = 'span';
    expect(actual).to.equal(expected);
  });

  it('should render two inputs with type radio when type="radio" and we give it 2 children', () => {
    const wrapper = renderComponent({
      type: 'radio',
      children: [<span value={1}>1</span>, <span value={2}>2</span>],
    });
    const actual = wrapper.find('input[type="radio"]');
    const expected = 2;
    expect(actual).to.have.length(expected);
  });

  it('should render two inputs with type radio when type="checkbox" and we give it 2 children', () => {
    const wrapper = renderComponent({
      type: 'checkbox',
      children: [<span value={1}>1</span>, <span value={2}>2</span>],
    });
    const actual = wrapper.find('input[type="checkbox"]');
    const expected = 2;
    expect(actual).to.have.length(expected);
  });

  it('should call user supplied onChange when an input with type radio is changed to checked', () => {
    const spy = sinon.spy();
    const wrapper = renderComponent({
      onChange: spy,
      children: [<span value={1}>1</span>, <span value={2}>2</span>],
    });
    const actual = wrapper.find('input[type="radio"][value=2]');
    actual.simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
    const expected = true;
    expect(spy.calledOnce).to.equal(expected);
  });

  it('should call user supplied onChange when an input with type checkbox is changed to checked', () => {
    const spy = sinon.spy();
    const wrapper = renderComponent({
      onChange: spy,
      type: 'checkbox',
      children: [<span value={1}>1</span>, <span value={2}>2</span>],
    });
    const actual = wrapper.find('input[type="checkbox"][value=2]');
    actual.simulate('change', { target: { checked: true }, currentTarget: { checked: true } });
    expect(spy.calledOnce).to.equal(true);
  });

  it('should set state to true when an input with type checkbox is changed to checked', () => {
    const wrapper = renderComponent({
      type: 'checkbox',
      children: [<span value={1}>1</span>, <span value={2}>2</span>],
    });
    const actual = wrapper.find('input[type="checkbox"][value=2]');
    actual.simulate('change', { target: { checked: true }, currentTarget: { value: 2 } });
    expect(wrapper.state()[2]).to.equal(true);
  });

  it('should set focus to child index when element get focus', () => {
    const wrapper = renderComponent({
      children: [<span value={1}>1</span>, <span value={2}>2</span>],
    });
    const actual = wrapper.find('input[type="radio"][value=1]');
    actual.simulate('focus', { type: 'focus' });
    expect(wrapper.state('focus')).to.equal(0);
  });

  it('should set focus to empty value when element get focus but event is not focus', () => {
    const wrapper = renderComponent({
      children: [<span value={1}>1</span>, <span value={2}>2</span>],
    });
    const actual = wrapper.find('input[type="radio"][value=1]');
    actual.simulate('focus', { type: 'not focus' });
    expect(wrapper.state('focus')).to.equal('');
  });
});
