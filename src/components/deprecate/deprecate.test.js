import React from 'react';
import { shallow } from 'enzyme';

import { deprecatedProps, deprecatedComponent } from './deprecate';

let warnMock;
beforeEach(() => {
  warnMock = jest.fn();
  global.console.warn = warnMock;
});

const DEFAULT_MESSAGE = 'Please consult the docs for a migration guide.';

test('deprecatedComponent', () => {
  const Component = () => <div />;
  const DC = deprecatedComponent('Flag')(Component);
  shallow(<DC />);
  expect(warnMock).toHaveBeenCalled();
  expect(warnMock.mock.calls[0][0]).toMatch('Flag is deprecated.');
  expect(warnMock.mock.calls[0][0]).toMatch(DEFAULT_MESSAGE);
});

test('deprecatedComponent with custom message', () => {
  const Component = () => <div />;
  const msg = 'Use the new Flag component instead.';
  const DC = deprecatedComponent('Flag2', msg)(Component);
  shallow(<DC />);
  expect(warnMock).toHaveBeenCalled();
  expect(warnMock.mock.calls[0][0]).toMatch('Flag2 is deprecated.');
  expect(warnMock.mock.calls[0][0]).toMatch(msg);
});

test('deprecatedComponent should only warn once', () => {
  const Component = () => <div />;
  const DC = deprecatedComponent('Flag3')(Component);
  shallow(<DC />);
  expect(warnMock).toHaveBeenCalled();
  shallow(<DC />);
  expect(warnMock).toHaveBeenCalledTimes(1);
  expect(warnMock.mock.calls[0][0]).toMatch('Flag3 is deprecated.');
});

test('deprecatedProps', () => {
  const Component = () => <div />;
  const DC = deprecatedProps('Flag', [
    {
      prop: 'size',
      message: 'size in Flag as a number is deprecated. Use sm, md or lg instead',
    },
  ])(Component);
  shallow(<DC size={16} />);
  expect(warnMock).toHaveBeenCalled();
  expect(warnMock.mock.calls[0][0]).toMatch('Use sm, md or lg instead');
});
