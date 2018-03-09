const React = require('react');
const { Alert } = require('../../'); // nordnet-ui-kit

module.exports = [
  {
    symbol: 'Alert/default',
    entity: <Alert header="Alert">Alert text</Alert>,
  },
  {
    symbol: 'Alert/vertical',
    entity: (
      <Alert header="Alert" vertical>
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/info',
    entity: (
      <Alert modifier="info" header="Alert">
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/success',
    entity: (
      <Alert modifier="success" header="Alert">
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/warning',
    entity: (
      <Alert modifier="warning" header="Alert">
        Alert text
      </Alert>
    ),
  },
  {
    symbol: 'Alert/danger',
    entity: (
      <Alert modifier="danger" header="Alert">
        Alert text
      </Alert>
    ),
  },
];

export default symbols;
