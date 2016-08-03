import React, { PropTypes } from 'react';

function VolumeListElement({ translation, color, value }) {
  return (
    <tr className="tooltip__listitem">
      <td className="tooltip__listitem-name">
        <b style={ { color } }>{ translation }</b>
      </td>
      <td className="tooltip__listitem-value">
        { value }
      </td>
    </tr>
  );
}

VolumeListElement.propTypes = {
  translation: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default VolumeListElement;
