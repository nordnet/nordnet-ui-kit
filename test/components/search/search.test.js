import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Search from '../../../src/components/search';
import SearchStyles from '../../../src/components/search/search-styles';

describe('<Search />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(SearchStyles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search search={a => a} />);
  });

  it('should render <div> as container', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should have the search class', () => {
    expect(wrapper.hasClass(classes.search)).to.equal(true);
  });
});
