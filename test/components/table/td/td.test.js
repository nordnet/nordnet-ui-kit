import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Td from '../../../../src/components/td';

describe('<Td />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Td />);
  });

  it('should render a <td />', () => {
    expect(wrapper.type()).to.equal('td');
  });

  it('should render a component with td--ellipsis by default', () => {
    expect(wrapper.find('.td--ellipsis')).to.have.length(1);
  });

  it('should not render a component with td--ellipsis, when ellipsis have false input', () => {
    wrapper = shallow(<Td ellipsis={ false } />);
    expect(wrapper.find('.td--ellipsis')).to.have.length(0);
  });
});
