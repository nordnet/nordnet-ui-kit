import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Select from '../../../src/components/select';
import SelectStyles from '../../../src/components/select/select-styles';

describe('<Select />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(SelectStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Select />);
  });

  it('should render a <div />', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have the class select', () => {
    expect(wrapper.hasClass(classes.select)).to.equal(true);
  });
});
