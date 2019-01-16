import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '../table-cell';

export default function Th(props) {
  const { style, ...rest } = props;

  const thStyle = {
    height: '100%',
    ...style,
  };

  return <TableCell tagName="th" style={thStyle} {...rest} />;
}

Th.propTypes = {
  style: PropTypes.object,
};
