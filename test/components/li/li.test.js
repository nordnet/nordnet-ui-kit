import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import Li from '../../../src/components/li/li';

describe('<Li />', () => {
  const shallow = createShallow(enzymeShallow);
  let wrapper;

  it('should render 2 <Li />', () => {
    wrapper = shallow(
      <ul>
        <Li>Test</Li>
        <Li>Test2</Li>
      </ul>,
    );
    expect(wrapper.find('Li')).to.have.length(2);
  });
});
