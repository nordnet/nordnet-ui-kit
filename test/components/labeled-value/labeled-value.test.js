import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LabeledValue from '../../../src/components/labeled-value/labeled-value';

describe('<LabeledValue />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <LabeledValue className="testclass" label="label" >
        myvalue
      </LabeledValue>,
    );
  });

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have class labeled-value', () => {
    expect(wrapper.hasClass('labeled-value')).to.equal(true);
  });

  it('should have input classname', () => {
    expect(wrapper.hasClass('testclass')).to.equal(true);
  });

  it('should render input child as value', () => {
    expect(wrapper.find('span.labeled-value__value').childAt(0).text()).to.equal('myvalue');
  });

  it('should render input label', () => {
    expect(wrapper.find('span.labeled-value__label').childAt(0).text()).to.equal('label');
  });

  it('should have class labeled-value--md as default', () => {
    expect(wrapper.hasClass('labeled-value--md'));
  });

  ['xs', 'sm', 'md', 'lg'].forEach((size) => {
    it(`should have class labeled-value--${size} if prop size is ${size}`, () => {
      wrapper.setProps({ size });
      expect(wrapper.hasClass(`labeled-value--${size}`));
    });
  });
});
