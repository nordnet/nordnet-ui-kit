import React from 'react';
import Flag from './flag';

const symbols = {
  'Flag/square': <Flag size={32} countryCode="se" />,
  'Flag/round': <Flag size={32} countryCode="se" round />,
  'Flag/currencies': <Flag size={64} countryCode="eu" secondaryCountryCode="se" />,
};

export default symbols;
