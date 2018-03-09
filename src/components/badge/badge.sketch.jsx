import React from 'react';
import Badge from './badge';

export const symbols = [
  {
    symbol: 'Badge/default',
    entity: <Badge>Badge</Badge>,
  },
  {
    symbol: 'Badge/danger',
    entity: <Badge modifier="danger">Badge</Badge>,
  },
  {
    symbol: 'Badge/warning',
    entity: <Badge modifier="warning">Badge</Badge>,
  },
  {
    symbol: 'Badge/success',
    entity: <Badge modifier="success">Badge</Badge>,
  },
];

export default symbols;
