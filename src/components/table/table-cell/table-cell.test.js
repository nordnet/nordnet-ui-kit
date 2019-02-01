import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../../..';
import { Component as TableCell, styles } from './table-cell';

describe('<TableCell />', () => {
  const classes = mockClasses(styles);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TableCell tagName="td" classes={classes} />);
  });

  test('should render a <td />', () => {
    expect(wrapper.type()).toBe('td');
  });

  test(`should render a component with the ${classes.td} class`, () => {
    expect(wrapper.hasClass(classes.td)).toBe(true);
  });

  test('should render a component with ellipsis class by default', () => {
    expect(wrapper.find('div.ellipsis')).toHaveLength(1);
  });

  test('should not render a component with td--ellipsis, when ellipsis have false input', () => {
    wrapper = shallow(<TableCell tagName="td" classes={classes} ellipsis={false} />);
    expect(wrapper.find('div.ellipsis')).toHaveLength(0);
  });
});
