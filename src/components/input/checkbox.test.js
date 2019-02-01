import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './checkbox';

const renderComponent = props => shallow(<Checkbox {...props} />);

describe('<Checkbox />', () => {
  test('has class checkbox', () => {
    const wrapper = renderComponent();
    expect(wrapper.hasClass('checkbox')).toBe(true);
  });

  test('has class checkbox--is-checked when checked is true', () => {
    const wrapper = renderComponent({ checked: true });
    expect(wrapper.hasClass('checkbox--is-checked')).toBe(true);
  });

  test('has class checkbox--is-disabled when disabled is true', () => {
    const wrapper = renderComponent({ disabled: true });
    expect(wrapper.hasClass('checkbox--is-disabled')).toBe(true);
  });

  test('renders checkmark when checked is true', () => {
    const wrapper = renderComponent({ checked: true });
    expect(wrapper.find('Checkmark')).toHaveLength(1);
  });

  test('renders no checkmark when checked is false', () => {
    const wrapper = renderComponent({ checked: false });
    expect(wrapper.find('Checkmark')).toHaveLength(0);
  });
});
