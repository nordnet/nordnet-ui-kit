import React from 'react';
import Input from './input';

const selectValues = [
  {
    label: '',
    value: 1,
  },
];

const symbols = {
  'Input/text/default': <Input label="label" placeholder="placeholder" />,
  'Input/text/secondary': <Input label="label" placeholder="placeholder" variant="secondary" />,
  'Input/text/success': <Input label="label" placeholder="placeholder" hasSuccess />,
  'Input/text/error': <Input label="label" placeholder="placeholder" hasError />,
  'Input/text/warning': <Input label="label" placeholder="placeholder" hasWarning />,
  'Input/text/leftAddon': <Input label="label" placeholder="placeholder" leftAddon="$" />,
  'Input/text/rightAddon': <Input label="label" placeholder="placeholder" rightAddon="USD" />,
  'Input/password': <Input type="password" label="label" placeholder="password" />,
  'Input/select': <Input type="select" label="label" placeholder="password" options={selectValues} />,
  'Input/checkbox': <Input type="checkbox" label="label" />,
  'Input/checkbox/checked': <Input type="checkbox" label="label" checked />,
  'Input/checkbox/success': <Input type="checkbox" label="label" hasSuccess />,
  'Input/checkbox/error': <Input type="checkbox" label="label" hasError />,
  'Input/radio': <Input type="radio" label="label" />,
  'Input/radio/checked': <Input type="radio" label="label" checked />,
  'Input/radio/success': <Input type="radio" label="label" hasSuccess />,
  'Input/radio/error': <Input type="radio" label="label" hasError />,
  'Input/textarea/default': <Input type="textarea" label="label" placeholder="placeholder" />,
  'Input/textarea/secondary': <Input type="textarea" label="label" placeholder="placeholder" variant="secondary" />,
  'Input/textarea/success': <Input type="textarea" label="label" placeholder="placeholder" hasSuccess />,
  'Input/textarea/error': <Input type="textarea" label="label" placeholder="placeholder" hasError />,
  'Input/textarea/warning': <Input type="textarea" label="label" placeholder="placeholder" hasWarning />,
};

export default symbols;
