import React, { PropTypes } from 'react';
import cn from 'classnames';
import styleSheet from './ratio-bar-styles';

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

function renderBar(classes, direction, value, naturalLanguage) {
  const backgroundClass = classes[`barBg--${direction}`];
  const styles = {
    width: `${value}%`,
  };

  return (
    <div className={classes.bar} style={styles}>
      <span className={backgroundClass}>
        { `${value.toFixed(2)}% ${naturalLanguage[direction]}.` }
      </span>
    </div>
  );
}

function renderLabels(classes, show, labelPositive, labelNegative) {
  if (!show) {
    return null;
  }

  return (
    <div aria-hidden="true">
      <span className={classes['directionLabel--negative']}>{ labelNegative }</span>
      <span className={classes['directionLabel--positive']}>{ labelPositive }</span>
    </div>
  );
}

function RatioBar({ data, label, labelPositive, labelNeutral, labelNegative, showLabels, className, ...rest }, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  const rootClassname = cn(classes.root, className);
  const [positive, neutral, negative] = calculatePercentages(data);

  const naturalLanguage = {
    positive: labelPositive.toLowerCase(),
    neutral: labelNeutral.toLowerCase(),
    negative: labelNegative.toLowerCase(),
  };

  return (
    <div className={rootClassname} {...rest}>
      { label ? <span className={classes.label}>{ label }</span> : null }
      { renderBar(classes, 'negative', negative, naturalLanguage) }
      { renderBar(classes, 'neutral', neutral, naturalLanguage) }
      { renderBar(classes, 'positive', positive, naturalLanguage) }
      { renderLabels(classes, showLabels, labelPositive, labelNegative) }
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

RatioBar.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default RatioBar;
