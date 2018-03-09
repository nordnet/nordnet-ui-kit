import React from 'react';
import Alert from './alert';

const symbols = {
  'Alert/default': <Alert header="Alert">Alert text</Alert>,
  'Alert/info': (
    <Alert modifier="info" header="Alert">
      Alert text
    </Alert>
  ),
  'Alert/success': (
    <Alert modifier="success" header="Alert">
      Alert text
    </Alert>
  ),
  'Alert/warning': (
    <Alert modifier="warning" header="Alert">
      Alert text
    </Alert>
  ),
  'Alert/danger': (
    <Alert modifier="danger" header="Alert">
      Alert text
    </Alert>
  ),
  'Alert/vertical': (
    <Alert header="Alert" vertical>
      Alert text
    </Alert>
  ),
};

export default symbols;
