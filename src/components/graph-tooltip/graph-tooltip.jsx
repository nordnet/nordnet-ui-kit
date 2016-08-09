import React, { PropTypes } from 'react';
import CompareTooltip from './compare-tooltip';
import InstrumentTooltip from './instrument-tooltip';

function GraphTooltip({ type, ...rest }) {
  switch (type) {
    case 'compare':
      return <CompareTooltip { ...rest } />;
    case 'instrument':
      return <InstrumentTooltip { ...rest } />;
    default:
      return <div />;
  }
}

GraphTooltip.defaultProps = {
  type: 'compare',
  points: [],
};

GraphTooltip.propTypes = {
  type: PropTypes.oneOf(['compare', 'instrument']),
  date: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    value: PropTypes.string.isRequired,
  })),
  volume: PropTypes.shape({
    translation: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
  }),
  ohlc: PropTypes.shape({
    color: PropTypes.string,
    open: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
    high: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
    low: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
    close: PropTypes.shape({
      translation: PropTypes.string,
      value: PropTypes.string,
    }),
  }),
};

export default GraphTooltip;
