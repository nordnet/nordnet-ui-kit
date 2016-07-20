import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Icon from '../../../src/components/icon/icon';
import { IconStateless } from 'react-svg-sprite-icon';
import icons from '../../../src/components/icon/icons';

describe('<Icon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon type="share" />);
  });

  it('should render a <IconStateless />', () => {
    expect(wrapper.type()).to.equal(IconStateless);
  });

  it('should send the type as name to <IconStateless />', () => {
    expect(wrapper.prop('name')).to.equal('share');
  });

  it('should send the correct svg to <IconStateless />', () => {
    expect(wrapper.prop('svg')).to.equal(icons.share);
  });
});
