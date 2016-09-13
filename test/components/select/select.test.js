import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Select from '../../../src/components/select/select';

describe('<Select />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Select />);
  });

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div');
  });
});
