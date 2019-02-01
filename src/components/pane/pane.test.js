import React from 'react';
import { shallow } from 'enzyme';
import { mockClasses } from '../..';
import { Component as Pane, styles } from './pane';

describe('<Pane />', () => {
  const classes = mockClasses(styles);

  describe('When <Pane /> don´t have any tabs', () => {
    const wrapper = shallow(<Pane classes={classes} />);
    test('should render null', () => {
      expect(wrapper.type()).toBeNull();
    });
  });

  describe('When <Pane /> is correctly populated with default props', () => {
    const tabs = [
      {
        label: 'Tab 1',
        body: <div>This is tab 1!</div>,
      },
      {
        label: 'Tab 2',
        body: <div>This is tab 2!</div>,
      },
      {
        label: 'Tab 3',
        body: <div>This is tab 3!</div>,
      },
    ];

    let wrapper;
    let renderedTabs;

    beforeEach(() => {
      wrapper = shallow(<Pane classes={classes} tabs={tabs} />);
      renderedTabs = wrapper
        .children()
        .children()
        .find('li');
    });

    test('should render <div> as container', () => {
      expect(wrapper.type()).toBe('div');
    });

    test('should have the class pane', () => {
      expect(wrapper.hasClass(classes.pane)).toBe(true);
    });

    test('should render children', () => {
      expect(wrapper.children()).toHaveLength(2);
    });

    test('should render tabs', () => {
      expect(renderedTabs).toHaveLength(3);
    });

    test('should have first tab as active', () => {
      expect(renderedTabs.at(0).hasClass(classes.active)).toBe(true);
    });

    test('default size should be md', () => {
      expect(renderedTabs.at(0).hasClass(classes.md)).toBe(true);
    });
  });

  describe('When <Pane /> is correctly populated with another size', () => {
    const tabs = [
      {
        label: 'Tab 1',
        body: <div>This is tab 1!</div>,
      },
    ];
    const wrapper = shallow(<Pane classes={classes} tabs={tabs} size="lg" />);
    test('should render <div> as container', () => {
      expect(wrapper.type()).toBe('div');
    });

    test('should have the class pane', () => {
      expect(wrapper.hasClass(classes.pane)).toBe(true);
    });

    test('should have class lg', () => {
      expect(
        wrapper
          .children()
          .children()
          .find('li')
          .at(0)
          .hasClass(classes.lg),
      ).toBe(true);
    });
  });
});
