import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ratio-bar.scss';

function percentage(value, total) {
  return Math.round((value / total) * 1000) / 10;
}

function calculatePercentages(data) {
  const {
    positive,
    neutral,
    negative,
    total,
  } = data.reduce((prev, curr) => {
    const values = prev;
    let direction;

    if (curr.change > 0) {
      direction = 'positive';
    } else if (curr.change < 0) {
      direction = 'negative';
    } else {
      direction = 'neutral';
    }

    values[direction] = values[direction] + curr.value;
    values.total = values.total + curr.value;

    return values;
  }, {
    positive: 0,
    neutral: 0,
    negative: 0,
    total: 0,
  });

  return [
    percentage(positive, total),
    percentage(neutral, total),
    percentage(negative, total),
  ];
}

function renderBar(direction, value) {
  const classes = classNames('ratio-bar__bar', `ratio-bar__bar--${direction}`);
  const styles = {
    width: `${value}%`,
  };
  const naturalLanguage = {
    positive: 'up',
    neutral: 'with no change',
    negative: 'down',
  };

  return (
    <span className={ classes } style={ styles }>
      <span className="ratio-bar__bar-background">
        { `${value}% ${naturalLanguage[direction]}.` }
      </span>
    </span>
  );
}

function renderLabels(show) {
  if (!show) {
    return <span />;
  }

  return (
    <div aria-hidden="true">
      <span className="ratio-bar__direction-label ratio-bar__direction-label--negative">Down</span>
      <span className="ratio-bar__direction-label ratio-bar__direction-label--positive">Up</span>
    </div>
  );
}

function RatioBar({ data, label, showLabels, className, ...rest }) {
  const classes = classNames('ratio-bar', className);
  const [positive, neutral, negative] = calculatePercentages(data);

  return (
    <div className={ classes } { ...rest }>
      { label ? <span className="ratio-bar__label">{ label }</span> : <span /> }
      { renderBar('negative', negative) }
      { renderBar('neutral', neutral) }
      { renderBar('positive', positive) }
      { renderLabels(showLabels) }
    </div>
  );
}

RatioBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    change: PropTypes.number,
  })),
  label: PropTypes.string,
  className: PropTypes.string,
  showLabels: PropTypes.bool,
};

RatioBar.defaultProps = {
  showLabels: true,
};

export default RatioBar;
