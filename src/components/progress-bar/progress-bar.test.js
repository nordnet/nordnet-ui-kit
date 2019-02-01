import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../../';
import { Component as ProgressBar, styles } from './progress-bar';

describe('<ProgressBar />', () => {
  const classes = mockClasses(styles);
  const value = 3;
  const max = 5;
  let wrapper;

  test('should render as primary by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .hasClass(classes.primary),
    ).toBe(true);
  });

  test('should render steps as spans by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .type(),
    ).toBe('span');
  });

  test('should not print numbers by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .text(),
    ).toBe('');
  });

  test('should be able to print numbers', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} printNumbers />);
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .text(),
    ).toBe('1');
  });

  test('should render the correct number of steps', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(wrapper.find('.progressBar').children().length).toBe(max);
  });

  test('should render the correct number of reached steps', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    [0, 1, 2].forEach(step => {
      expect(
        wrapper
          .find('.progressBar')
          .childAt(step)
          .hasClass('reached'),
      ).toBe(true);
    });
  });

  test('should render the correct number of unreached steps', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    [3, 4].forEach(step => {
      expect(
        wrapper
          .find('.progressBar')
          .childAt(step)
          .hasClass('reached'),
      ).toBe(false);
    });
  });

  test('should not highlight the active step by default', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} />);
    expect(wrapper.find('.progressBar .active').length).toBe(0);
    expect(
      wrapper
        .find('.progressBar')
        .childAt(value - 1)
        .hasClass('active'),
    ).toBe(false);
  });

  test('should be possible to highlight the active step', () => {
    wrapper = shallow(<ProgressBar classes={classes} value={value} max={max} highlightActive />);
    expect(wrapper.find('.progressBar .active').length).toBe(1);
    expect(
      wrapper
        .find('.progressBar')
        .childAt(value - 1)
        .hasClass('active'),
    ).toBe(true);
  });

  ['primary', 'secondary'].forEach(variant => {
    test(`should have class ${classes[variant]} if variant is set to ${variant}`, () => {
      wrapper = shallow(
        <ProgressBar classes={classes} variant={variant} value={value} max={max} />,
      );
      expect(
        wrapper
          .find('.progressBar')
          .childAt(0)
          .hasClass(classes[variant]),
      ).toBe(true);
    });
  });

  test('should be possible to render a step as an A tag', () => {
    wrapper = shallow(
      <ProgressBar classes={classes} value={value} max={max} clickables={[{ href: '/foo/bar' }]} />,
    );
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .type(),
    ).toBe('a');
  });

  test('should be possible to render a step as a BUTTON tag', () => {
    wrapper = shallow(
      <ProgressBar
        classes={classes}
        value={value}
        max={max}
        clickables={[{ onClick: () => {} }]}
      />,
    );
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .type(),
    ).toBe('button');
  });

  test('should be possible to render a step as a disabled BUTTON tag', () => {
    wrapper = shallow(
      <ProgressBar classes={classes} value={value} max={max} clickables={[{ disabled: true }]} />,
    );
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .type(),
    ).toBe('button');
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .props().disabled,
    ).toBe(true);
  });

  test('should be possible to override the reached class for a specific step', () => {
    wrapper = shallow(
      <ProgressBar classes={classes} value={value} max={max} clickables={[{ reached: false }]} />,
    );
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .hasClass('reached'),
    ).toBe(false);
    expect(
      wrapper
        .find('.progressBar')
        .childAt(1)
        .hasClass('reached'),
    ).toBe(true);
  });

  test('should be possible to override the active class for a specific step', () => {
    wrapper = shallow(
      <ProgressBar classes={classes} value={value} max={max} clickables={[{ active: true }]} />,
    );
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .hasClass('reached'),
    ).toBe(true);
  });

  test('should be possible to override the label class for a specific step', () => {
    wrapper = shallow(
      <ProgressBar
        classes={classes}
        value={value}
        max={max}
        printNumbers
        clickables={[{ label: 'A' }]}
      />,
    );
    expect(
      wrapper
        .find('.progressBar')
        .childAt(0)
        .text(),
    ).toBe('A');
    expect(
      wrapper
        .find('.progressBar')
        .childAt(1)
        .text(),
    ).toBe('2');
  });
});
