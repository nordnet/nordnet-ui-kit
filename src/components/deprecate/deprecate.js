/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import * as R from 'ramda';

// Only want to warn once per component
const hasWarned = {};
// Usage: deprecatedComponent('Pane', 'Use Tabs instead')(Component);
const deprecatedComponent = (
  displayName,
  extraMessage = 'Please consult the docs for a migration guide.',
) => C => {
  class Deprecated extends Component {
    componentDidMount() {
      if (!hasWarned[displayName]) {
        // eslint-disable-next-line no-console
        console.warn(`${displayName} is deprecated. ${extraMessage}`);
        hasWarned[displayName] = true;
      }
    }

    render() {
      return <C {...this.props} />;
    }
  }
  return Deprecated;
};

// Only want to warn once per component and prop
const hasWarnedProps = {};

/* Usage:
    deprecatedProps('Flag', [{
      prop: 'size',
      message: 'size in Flag as a number is deprecated. Use sm, md or lg instead',
    }])(Flag)
*/
const deprecatedProps = (displayName, deprecated) => C => {
  class Deprecated extends Component {
    componentDidMount() {
      if (!hasWarnedProps[displayName]) hasWarnedProps[displayName] = {};
      R.intersection(Object.keys(this.props), deprecated.map(d => d.prop)).forEach(p => {
        if (!hasWarnedProps[displayName][p]) {
          // eslint-disable-next-line no-console
          console.warn((deprecated.find(d1 => d1.prop === p) || {}).message);
          hasWarnedProps[displayName][p] = true;
        }
      });
    }

    render() {
      return <C {...this.props} />;
    }
  }
  return Deprecated;
};

const isNotProd = process.env.NODE_ENV !== 'production';

const dc = isNotProd ? deprecatedComponent : C => C;
const dp = isNotProd ? deprecatedProps : C => C;

export { dc as deprecatedComponent, dp as deprecatedProps };
