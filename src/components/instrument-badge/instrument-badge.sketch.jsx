import React from 'react';
import InstrumentBadge from './instrument-badge';

const symbols = {
  'InstrumentBadge/sm': <InstrumentBadge size="sm" subText="text" />,
  'InstrumentBadge/md': <InstrumentBadge size="md" subText="text" />,
  'InstrumentBadge/qualified': <InstrumentBadge qualified subText="Qualified" />,
  'InstrumentBadge/unqualified': <InstrumentBadge subText="Unqualified" />,
  'InstrumentBadge/placementRight': <InstrumentBadge subText="Unqualified" subTextPlacement="right" />,
  'InstrumentBadge/tooltipContent': <InstrumentBadge subText="Unqualified" tooltipContent={<span>tooltip</span>} />,
};

export default symbols;
