import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import HorizontalNav from '../../../src/components/horizontal-nav';
import HorizontalNavStyles from '../../../src/components/horizontal-nav/horizontal-nav-styles';

describe('<HorizontalNav />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(HorizontalNavStyles);
  let wrapper;

  beforeEach(() => {
    const items = [];

    for (let i = 0; i < 20; i += 1) {
      items.push({ label: `Item ${i + 1}` });
    }

    wrapper = shallow(<HorizontalNav items={items} />);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have the class horizontalNav', () => {
    expect(wrapper.hasClass(classes.horizontalNav)).to.equal(true);
  });
});
