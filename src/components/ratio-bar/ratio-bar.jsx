import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ratio-bar.scss';

function percentage(value, total) {
  return (value / total) * 100;
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

    values[direction] += curr.value;
    values.total += curr.value;

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

function renderBar(direction, value, naturalLanguage) {
  const classes = classNames('ratio-bar__bar', `ratio-bar__bar--${direction}`);
  const styles = {
    width: `${value}%`,
  };

  return (
    <div className={classes} style={styles}>
      <span className="ratio-bar__bar-background">
        { `${value.toFixed(2)}% ${naturalLanguage[direction]}.` }
      </span>
    </div>
  );
}

function renderLabels(show, labelPositive, labelNegative) {
  if (!show) {
    return <span />;
  }

  return (
    <div aria-hidden="true">
      <span className="ratio-bar__direction-label ratio-bar__direction-label--negative">{ labelNegative }</span>
      <span className="ratio-bar__direction-label ratio-bar__direction-label--positive">{ labelPositive }</span>
    </div>
  );
}

function RatioBar({ data, label, labelPositive, labelNeutral, labelNegative, showLabels, className, ...rest }) {
  const classes = classNames('ratio-bar', className);
  const [positive, neutral, negative] = calculatePercentages(data);

  const naturalLanguage = {
    positive: labelPositive.toLowerCase(),
    neutral: labelNeutral.toLowerCase(),
    negative: labelNegative.toLowerCase(),
  };

  return (
    <div className={classes} {...rest}>
      { label ? <span className="ratio-bar__label">{ label }</span> : <span /> }
      { renderBar('negative', negative, naturalLanguage) }
      { renderBar('neutral', neutral, naturalLanguage) }
      { renderBar('positive', positive, naturalLanguage) }
      { renderLabels(showLabels, labelPositive, labelNegative) }
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
  labelPositive: PropTypes.string,
  labelNeutral: PropTypes.string,
  labelNegative: PropTypes.string,
};

RatioBar.defaultProps = {
  showLabels: true,
  labelPositive: 'Up',
  labelNeutral: 'with no change',
  labelNegative: 'Down',
};

export default RatioBar;
