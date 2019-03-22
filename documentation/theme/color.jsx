import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

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
    width: 220,
    height: 130,

    '& span': {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
});

const Color = ({ theme, classes }) => (
  <div className={classes.colorWrapper}>
    {Object.entries(theme.palette).map(([name, value]) =>
      typeof value === 'string' ? (
        <div key={name} className={classes.colorBlock}>
          <span>{name}</span>
          <div>{value}</div>
          <div
            style={{
              background: `${value}`,
              width: 50,
              height: 40,
              border: '4px solid maroon',
            }}
          />
        </div>
      ) : null,
    )}
  </div>
);

Color.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Color);
