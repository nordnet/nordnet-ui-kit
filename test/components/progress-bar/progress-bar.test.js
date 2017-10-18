import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mockClasses } from '../../../src';
import { Component as ProgressBar, styles } from '../../../src/components/progress-bar/progress-bar';

describe('<ProgressBar />', () => {
  const classes = mockClasses(styles);
  const value = 3;
  const max = 5;
  let wrapper;

  it('should render as primary by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(wrapper.find('.progressBar').childAt(0).hasClass(classes.primary)).to.equal(true);
  });

  it('should render as xs by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(wrapper.instance().props.size).to.equal('xs');
  });

  it('should render steps as spans by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(wrapper.find('.progressBar').childAt(0).type()).to.equal('span');
  });

  it('should not print numbers by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(wrapper.find('.progressBar').childAt(0).text()).to.equal('');
  });

  it('should be able to print numbers', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} printNumbers />);
    expect(wrapper.find('.progressBar').childAt(0).text()).to.equal('1');
  });

  it('should render the correct number of steps', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(wrapper.find('.progressBar').children().length).to.equal(max);
  });

  it('should render the correct number of reached steps', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    [0, 1, 2].forEach(step => {
      expect(wrapper.find('.progressBar').childAt(step).hasClass('reached')).to.equal(true);
    });
  });

  it('should render the correct number of unreached steps', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    [3, 4].forEach(step => {
      expect(wrapper.find('.progressBar').childAt(step).hasClass('reached')).to.equal(false);
    });
  });

  ['primary', 'secondary'].forEach(variant => {
    it(`should have class ${classes[variant]} if variant is set to ${variant}`, () => {
      wrapper = shallow(<ProgressBar classes={classes} variant={variant} value={value} max={max} />);
      expect(wrapper.find('.progressBar').childAt(0).hasClass(classes[variant])).to.equal(true);
    });
  });

  it('should be possible to render a step as an A tag', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} clickables={[{ href: '/foo/bar' }]} />);
    expect(wrapper.find('.progressBar').childAt(0).type()).to.equal('a');
  });

  it('should be possible to render a step as a BUTTON tag', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} clickables={[{ onClick: () => {} }]} />);
    expect(wrapper.find('.progressBar').childAt(0).type()).to.equal('button');
  });

  it('should be possible to render a step as a disabled BUTTON tag', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} clickables={[{ disabled: true }]} />);
    expect(wrapper.find('.progressBar').childAt(0).type()).to.equal('button');
    expect(wrapper.find('.progressBar').childAt(0).props().disabled).to.equal(true);
  });

  it('should be possible to override the reached class for a specific step', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} clickables={[{ reached: false }]} />);
    expect(wrapper.find('.progressBar').childAt(0).hasClass('reached')).to.equal(false);
    expect(wrapper.find('.progressBar').childAt(1).hasClass('reached')).to.equal(true);
  });

  it('should be possible to override the label class for a specific step', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} printNumbers clickables={[{ label: 'A' }]} />);
    expect(wrapper.find('.progressBar').childAt(0).text()).to.equal('A');
    expect(wrapper.find('.progressBar').childAt(1).text()).to.equal('2');
  });
});
