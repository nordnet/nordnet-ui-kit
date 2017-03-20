import React, { PropTypes } from 'react';
import './text-icon.scss';

function TextIcon({ text, color, textColor }) {
  return (
    <div
      className="icon"
      style={ {
        backgroundColor: color,
        color: textColor,
      } }
    >
      { text }
    </div>
  );
}

TextIcon.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

TextIcon.defaultProps = {
  color: '#4C4A56',
  textColor: 'white',
};

export default TextIcon;
