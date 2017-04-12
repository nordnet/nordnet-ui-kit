import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { kebabCase } from 'lodash';
import styleSheet from './legend-styles';

function legendItem({ color, label, value, ...rest }) {
  return (
    <li key={kebabCase(label)} {...rest} className="item">
      <span className="indicator" style={{ backgroundColor: color }} />
      <span className="label">{ label }</span>
      { value ? <span className="value">{ value }</span> : null }
    </li>
  );
}

legendItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.node,
};

function Legend({ className, items, ...rest }, { styleManager }) {
  const classes = styleManager.render(styleSheet);
  const legendClassName = classNames(classes.legend, className);

  return (
    <div {...rest} className={legendClassName}>
      <ul className="items">
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

Legend.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default Legend;
