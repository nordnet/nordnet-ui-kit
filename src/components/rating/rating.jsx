import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { Icon as UiKitIcon } from '../..';
import styles from './rating.styles';

/* eslint-disable react/no-array-index-key */
const Rating = ({ icon: Icon = UiKitIcon.Star, size, rating, maxRating, classes }) => (
  <div className={classes.rating}>
    {[...Array(maxRating)].map((_, index) => {
      const classNames = cn({
        [classes.active]: index < rating,
        [classes.inactive]: index >= rating,
        [classes.ratingIcon]: true,
      });
      return (
        <Icon
          key={index}
          className={classNames}
          fill="currentColor"
          stroke="currentColor"
          width={size}
          height={size}
        />
      );
    })}
  </div>
);

Rating.defaultProps = {
  maxRating: 5,
  size: 16,
};
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
  icon: PropTypes.func,
  size: PropTypes.number,
  classes: PropTypes.shape().isRequired,
};

export { Rating as Component, styles };
export default injectSheet(styles)(Rating);
