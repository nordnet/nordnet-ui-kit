import React from 'react';
import { shallow } from 'enzyme';
import { Icon, mockClasses } from '../..';
import { Component as Rating, styles } from './rating';

const classes = mockClasses(styles);

const renderComponent = props => {
  const defaultProps = {
    icon: Icon.Star,
    size: 20,
    rating: 4,
    maxRating: 6,
    classes: {
      ...classes,
      active: 'active',
      inactive: 'inactive',
    },
  };
  const newProps = { ...defaultProps, ...props };

  return shallow(<Rating {...newProps} />);
};

test('Should have same number active stars as rating says', () => {
  const rating = 4;
  const component = renderComponent({ rating });
  const active = component.find('.active');
  const inactive = component.find('.inactive');
  expect(active).toHaveLength(4);
  expect(inactive).toHaveLength(2);
});

test('Should display a sensible default if rating is invalid', () => {
  const invalidRatings = [undefined, null, NaN, -1, 'foo'];
  invalidRatings.forEach(rating => {
    const component = renderComponent({ rating });
    expect(component.text()).toBe('–');
  });
});

test('Should display default for rating = 0 if minRating = 1', () => {
  const rating = 0;
  const minRating = 1;
  const component = renderComponent({ rating, minRating });
  expect(component.text()).toBe('–');
});

test('Should default to 0 active stars for rating = 0', () => {
  const rating = 0;
  const component = renderComponent({ rating });
  const active = component.find('.active');
  const inactive = component.find('.inactive');
  expect(active).toHaveLength(0);
  expect(inactive).toHaveLength(6);
});
