import React, { PropTypes } from 'react';

function CandleListElement({ color, ...rest }) {
  return (
    <tr className="tooltip__listitem">
      <td />
      <td className="tooltip__listitem-value">
        { Object.keys(rest).map(key => getCandleValue(color, rest[key])) }
      </td>
    </tr>
  );
}

function getCandleValue(color, { translation, value }) {
  return (
    <span>
      <b style={ { color } }>{ translation }:</b> { value }
    </span>
  );
}

CandleListElement.propTypes = {
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
};

export default CandleListElement;
