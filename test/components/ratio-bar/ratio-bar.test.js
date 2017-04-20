import React from 'react';
import { expect } from 'chai';
import { shallow as enzymeShallow } from 'enzyme';
import { createShallow } from '../../../src/test-utils';
import RatioBar from '../../../src/components/ratio-bar/ratio-bar';
import styleSheet from '../../../src/components/ratio-bar/ratio-bar-styles';

describe('<RatioBar />', () => {
  const shallow = createShallow(enzymeShallow);
  const classes = shallow.context.styleManager.render(styleSheet);
  let wrapper;
  const data = [{
    value: 100,
    change: 1,
  }, {
    value: 100,
    change: 0,
  }, {
    value: 100,
    change: -1,
  }];

  const widthPercent = `${(1 / 3) * 100}%`;

  beforeEach(() => {
    wrapper = shallow(<RatioBar data={data} />);
  });

  it(`positive bar should have a width of ${widthPercent}`, () => {
    const selector = `.${classes['barBg--positive']}`;
    expect(wrapper.find(selector).parent().prop('style').width).to.equal(widthPercent);
  });

  it(`neutral bar should have a width of ${widthPercent}`, () => {
    const selector = `.${classes['barBg--neutral']}`;
    expect(wrapper.find(selector).parent().prop('style').width).to.equal(widthPercent);
  });

  it(`negative bar should have a width of ${widthPercent}`, () => {
    const selector = `.${classes['barBg--negative']}`;
    expect(wrapper.find(selector).parent().prop('style').width).to.equal(widthPercent);
  });
});
