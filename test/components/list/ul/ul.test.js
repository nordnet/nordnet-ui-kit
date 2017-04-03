import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Ul from '../../../../src/components/ul';
import Li from '../../../../src/components/li';

describe('<Ul />', () => {
  let wrapper;
  const testText = 'TEST-asldkfnsf09823710hsd+1';

  beforeEach(() => {
    wrapper = shallow(
      <Ul>
        <Li>{ testText }</Li>
      </Ul>
    );
  });

  it('should render a <Ul></Ul>', () => {
    expect(wrapper.type()).to.equal('ul');
  });

  it('should contain a <Li></Li> element', () => {
    expect(wrapper.childAt(0).childAt(0).text()).to.equal(testText);
  });
});
