import React from 'react';
import PropTypes from 'prop-types';

const colorStyle = backgroundColor => ({
  backgroundColor,
  width: 100,
  height: 100,
  border: 'solid 1px black',
  float: 'left',
});

const colorWrapper = {
  display: 'inline-block',
  width: 400,
};

const VisualTheme = ({ theme }) => (
  <div>
    <h1>Colors</h1>
    <div style={colorWrapper}>
      {Object.entries(theme.palette.color).map(([name, value]) => (
        <div style={colorStyle(value)}>
          {name}, {value}
        </div>
      ))}
    </div>
  </div>
);

VisualTheme.propTypes = {
  theme: PropTypes.Object.isRequired,
};

export default VisualTheme;
