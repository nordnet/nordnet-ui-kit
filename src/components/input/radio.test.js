import React from 'react';
import { shallow } from 'enzyme';
import Radio from './radio';

const renderComponent = props => shallow(<Radio {...props} />);

describe('<Radio />', () => {
  test('has class radio', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('radio')).toBe(true);
  });

  test('has class radio--is-checked when checked is true', () => {
    const wrapper = renderComponent({ checked: true });
    expect(wrapper.hasClass('radio--is-checked')).toBe(true);
  });

  test('has class radio--is-disabled when disabled is true', () => {
    const wrapper = renderComponent({ disabled: true });
    expect(wrapper.hasClass('radio--is-disabled')).toBe(true);
  });
});
