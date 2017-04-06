import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Logo from '../../../src/components/logo/logo';

describe('<Logo />', () => {
  const shallow = createShallow(enzymeShallow);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render a <span />', () => {
    expect(wrapper.type()).to.equal('span');
  });

  it('should have a default width', () => {
    expect(wrapper.prop('style').width).to.equal(130);
  });

  it('should be possible to customize the width', () => {
    const newElement = shallow(<Logo width={200} />);
    expect(newElement.prop('style').width).to.equal(200);
  });

  it('should have type default if no type is specified', () => {
    expect(wrapper.find('span[type="default"]')).to.have.length(1);
  });
});
