import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import './legend.scss';

function legendItem({ color, label, value, ...rest }) {
  return (
    <li key={ kebabCase(label) } { ...rest } className="legend__item">
      <span className="legend__item-indicator" style={ { backgroundColor: color } } />
      <span className="legend__item-label">{ label }</span>
      { value ? <span className="legend__item-value">{ value }</span> : null }
    </li>
  );
}

legendItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
};

function Legend({ className, items, ...rest }) {
  const classes = classNames('legend', className);

  return (
    <div { ...rest } className={ classes }>
      <ul className="legend__items">
        { items.map(legendItem) }
      </ul>
    </div>
  );
}

Legend.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    label: React.PropTypes.node.isRequired,
    value: PropTypes.node,
  })),
};

export default Legend;
