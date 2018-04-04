import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { getContrastRatio } from './color-helpers';

const styles = () => ({
  colorWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  colorBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexFlow: 'column',
    width: 100,
    height: 100,

    '& span': {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
});

const contrastThreshold = 3;

const colorStyle = backgroundColor => {
  const contrast = getContrastRatio('#fff', backgroundColor);
  const color = contrast > contrastThreshold ? '#fff' : '#000';

  return {
    backgroundColor,
    color,
  };
};

const Color = ({ theme, classes }) => (
  <div className={classes.colorWrapper}>
    {Object.entries(theme.palette.color).map(([name, value]) => (
      <div key={name} className={classes.colorBlock} style={colorStyle(value)}>
        <span>{name}</span>
        <div>{value}</div>
      </div>
    ))}
  </div>
);

Color.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Color);
