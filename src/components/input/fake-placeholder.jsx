import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FakePlaceholder = ({ placeholder, label, classes, selectable }) => {
  const content = placeholder || label;
  return (
    <span className={cn('input__placeholder', { [classes.selectable]: selectable })}>
      {content}
    </span>
  );
};

FakePlaceholder.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.object,
  selectable: PropTypes.bool,
};

export default FakePlaceholder;
