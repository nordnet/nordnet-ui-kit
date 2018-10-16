import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import styles from './tabs-styles';

class Tabs extends Component {
  injectContextProps(displayName) {
    const { children: childrenFromProp, value, variant, singlePanel, onChange } = this.props;
    let index = 0;

    return React.Children.map(childrenFromProp, child => {
      if (child.type.displayName !== displayName || !React.isValidElement(child)) {
        return null;
      }

      index += 1;

      return React.cloneElement(child, {
        selected: value === index - 1,
        index: index - 1,
        variant,
        singlePanel,
        changeHandler: child.type.displayName === 'Jss(Tab)' ? onChange : null,
      });
    });
  }

  render() {
    const { classes, className, variant } = this.props;
    const tabs = this.injectContextProps('Jss(Tab)');
    const tabpanels = this.injectContextProps('Jss(Tabpanel)');

    return (
      <div>
        <ul className={cn(classes.list, classes[variant], className)} role="tablist">
          {tabs}
        </ul>
        {tabpanels}
      </div>
    );
  }
}

Tabs.defaultProps = {
  variant: 'primary',
  className: null,
  onChange: () => {},
  singlePanel: false,
};

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /** Index number of the tab you want to be selected */
  value: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  singlePanel: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export { Tabs as Component, styles };
export default injectSheet(styles)(Tabs);
