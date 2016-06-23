import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import RatioBar from '../../../src/components/ratio-bar';

describe('<RatioBar />', () => {
  let component;
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
    component = shallow(<RatioBar data={ data } />);
  });

  it(`positive bar should have a width of ${widthPercent}`, () => {
    expect(component.find('.ratio-bar__bar--positive').prop('style').width).to.equal(widthPercent);
  });

  it(`neutral bar should have a width of ${widthPercent}`, () => {
    expect(component.find('.ratio-bar__bar--neutral').prop('style').width).to.equal(widthPercent);
  });

  it(`negative bar should have a width of ${widthPercent}`, () => {
    expect(component.find('.ratio-bar__bar--negative').prop('style').width).to.equal(widthPercent);
  });
});
