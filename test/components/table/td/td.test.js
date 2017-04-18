import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../../src/test-utils';
import Td from '../../../../src/components/td';
import TdStyles from '../../../../src/components/td/td-styles';

describe('<Td />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(TdStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Td />);
  });

  it('should render a <td />', () => {
    expect(wrapper.type()).to.equal('td');
  });

  it(`should render a component with the ${classes.td} class`, () => {
    expect(wrapper.hasClass(classes.td)).to.equal(true);
  });

  it('should render a component with ellipsis class by default', () => {
    expect(wrapper.find('.ellipsis')).to.have.length(1);
  });

  it('should not render a component with td--ellipsis, when ellipsis have false input', () => {
    wrapper = shallow(<Td ellipsis={false} />);
    expect(wrapper.find('.ellipsis')).to.have.length(0);
  });
});
