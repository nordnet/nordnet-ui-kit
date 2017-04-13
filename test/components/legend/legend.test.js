import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Legend from '../../../src/components/legend';
import LegendStyles from '../../../src/components/legend/legend-styles';

describe('<Legend />', () => {
  const items = [{
    color: 'red',
    label: 'OMXS30',
    value: '+2%',
  }, {
    color: 'green',
    label: 'S&P 600',
    value: '+2%',
  }, {
    color: 'blue',
    label: 'Dow Jones',
    value: '+2%',
  }];

  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(LegendStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Legend items={items} />);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it(`should have the class ${classes.legend}`, () => {
    expect(wrapper.hasClass(classes.legend)).to.equal(true);
  });
});
