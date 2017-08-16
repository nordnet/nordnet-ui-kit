describe.skip('<InputDefault />', () => {
  it.skip('should have tests', () => {});
});

/*
import React from 'react';
import { assert } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import InputDefault from '../../../src/components/input/input-default';

describe('<InputDefault />', () => {
  const shallow = createShallow(enzymeShallow);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<InputDefault />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('adds value class when there is an value', () => {
    const nonEmtpyValues = ['a string', false, 7, [3], { someProp: 'a value' }];

    nonEmtpyValues.forEach(v => {
      wrapper.setProps({ value: v });
      assert(wrapper.hasClass('input--has-value'), `"${v}" did not set the value class`);
    });
  });

  it('does not add a value class when value is empty', () => {
    const emtpyValues = [undefined, null, '', [], {}];

    emtpyValues.forEach(v => {
      wrapper.setProps({ value: v });
      assert(!wrapper.hasClass('input--has-value'), `"${v}" did set the value class`);
    });
  });
});
*/
