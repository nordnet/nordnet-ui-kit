import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src/test-utils';
import { theme } from '../../../src';
import { Component as Li, styles } from '../../../src/components/li/li';

describe('<Li />', () => {
  const classes = mockClasses(styles(theme));
  let wrapper;

  it('should render 2 <Li />', () => {
    wrapper = shallow(
      <ul>
        <Li classes={classes}>Test</Li>
        <Li classes={classes}>Test2</Li>
      </ul>,
    );
    expect(wrapper.find('Li')).to.have.length(2);
  });
});
