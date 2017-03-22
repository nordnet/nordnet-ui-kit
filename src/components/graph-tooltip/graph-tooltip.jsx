import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CompareTooltip from './compare-tooltip';
import InstrumentTooltip from './instrument-tooltip';
import './graph-tooltip.scss';

function renderContent(type, rest) {
  switch (type) {
    case 'compare':
      return <CompareTooltip {...rest} />;
    case 'instrument':
      return <InstrumentTooltip {...rest} />;
    default:
      return <tbody />;
  }
}

function GraphTooltip({ type, date, time, ...rest }) {
  const classes = classNames('graph-tooltip', `graph-tooltip--${type.toLowerCase()}`);

  return (
    <div className={classes}>
      <div className="graph-tooltip__date">
        { date }
        { time ? <span className="graph-tooltip__date-time">{ time }</span> : null }
      </div>
      { renderContent(type, rest) }
    </div>
  );
}

GraphTooltip.defaultProps = {
  type: 'compare',
  points: [],
};

GraphTooltip.propTypes = {
  type: PropTypes.oneOf(['compare', 'instrument']),
  date: PropTypes.string.isRequired,
  time: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    value: PropTypes.string.isRequired,
    open: PropTypes.string,
    high: PropTypes.string,
    low: PropTypes.string,
    close: PropTypes.string,
  })),
};

export default GraphTooltip;
