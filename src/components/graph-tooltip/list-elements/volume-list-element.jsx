import React, { PropTypes } from 'react';

function VolumeListElement({ translation, value }) {
  return (
    <tr className="tooltip__listitem">
      <td className="tooltip__listitem-name">
        <b>{ translation }</b>
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
