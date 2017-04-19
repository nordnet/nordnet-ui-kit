import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../../src/test-utils';
import Th from '../../../../src/components/th';
import ThStyles from '../../../../src/components/th/th-styles';

describe('<Th />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(ThStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Th />);
  });

  it('should render a <th />', () => {
    expect(wrapper.type()).to.equal('th');
  });

  it(`should render a component with the ${classes.th} class`, () => {
    expect(wrapper.hasClass(classes.th)).to.equal(true);
  });

  it('should render a component with th--ellipsis by default', () => {
    expect(wrapper.find('.ellipsis')).to.have.length(1);
  });

  it('should not render a component with th--ellipsis, when ellipsis have false input', () => {
    wrapper = shallow(<Th ellipsis={false} />);
    expect(wrapper.find('.ellipsis')).to.have.length(0);
  });
});
