import React, { PropTypes } from 'react';

function PriceListElement({ name, value, percentValue }) {
  return (
    <tr className="tooltip__listitem">
      <td className="tooltip__listitem-name">
        <b>{ name }</b>
      </td>
      <td className="tooltip__listitem-value">
        { value + (percentValue ? '%' : '') }
      </td>
    </tr>
  );
}

PriceListElement.defaultProps = {
  percentValue: false,
};

PriceListElement.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  percentValue: PropTypes.bool,
};

export default PriceListElement;
