import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Th from '../../../../src/components/th';

describe('<Th />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Th />);
  });

  it('should render a <th />', () => {
    expect(wrapper.type()).to.equal('th');
  });

  it('should render a component with th--ellipsis by default', () => {
    expect(wrapper.find('.th--ellipsis')).to.have.length(1);
  });

  it('should not render a component with th--ellipsis, when ellipsis have false input', () => {
    wrapper = shallow(<Th ellipsis={false} />);
    expect(wrapper.find('.th--ellipsis')).to.have.length(0);
  });
});
