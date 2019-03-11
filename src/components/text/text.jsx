import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import injectSheet from 'react-jss';
import * as R from 'ramda';

import styles from './text.styles';

const asSize = (
  size,
  defaultWeight = 'regular',
  allowedWeights = ['regular', 'bold', 'extrabold'],
) => {
  const Text = ({ as: Element, regular, bold, extrabold, uppercase, classes, children }) => (
    <Element
      className={cn(classes[size], {
        [classes.regular]: allowedWeights.includes('regular') && regular,
        [classes.bold]: allowedWeights.includes('bold') && bold,
        [classes.extrabold]: allowedWeights.includes('extrabold') && extrabold,
        [classes.uppercase]: uppercase,
      })}
    >
      {children}
    </Element>
  );

  Text.propTypes = {
    as: PropTypes.node,
    regular: PropTypes.bool,
    bold: PropTypes.bool,
    extrabold: PropTypes.bool,
    uppercase: PropTypes.bool,
    children: PropTypes.node.isRequired,
    classes: PropTypes.shape().isRequired,
  };

  Text.defaultProps = {
    as: 'span',
    regular: defaultWeight === 'regular',
    bold: defaultWeight === 'bold',
    extrabold: defaultWeight === 'extrabold',
    uppercase: false,
  };

  return Text;
};

const wrapInInject = R.map(injectSheet(styles));

const components = {
  Primary: asSize('primary'),
  Secondary: asSize('secondary', ['regular', 'bold']),
  Tertiary: asSize('tertiary', ['regular', 'bold']),
  Caption: asSize('caption', ['regular', 'bold']),
  Title1: asSize('title1', 'extrabold'),
  Title2: asSize('title2', 'extrabold'),
  Title3: asSize('title3', 'extrabold'),
  Hero: asSize('hero', 'extrabold', ['extrabold']),
};

export default wrapInInject(components);
