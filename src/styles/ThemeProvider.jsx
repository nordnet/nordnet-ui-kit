import PropTypes from 'prop-types';
import { Component } from 'react';
import { create as createJss } from 'jss';
import jssPreset from 'jss-preset-default';
import { createStyleManager } from 'jss-theme-reactor/styleManager';
import { createTheme } from './theme';

// https://github.com/callemall/material-ui/tree/next/src/styles

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    styleManager: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
    theme: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    styleManager: null,
    theme: null,
  };

  static childContextTypes = {
    styleManager: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  static createDefaultContext(props = {}) {
    const theme = props.theme || createTheme();
    const styleManager =
      props.styleManager ||
      createStyleManager({
        theme,
        jss: createJss(jssPreset()),
      });

    return { theme, styleManager };
  }

  getChildContext() {
    const { theme, styleManager } = this;
    return {
      theme,
      styleManager,
    };
  }

  componentWillMount() {
    const { theme, styleManager } = ThemeProvider.createDefaultContext(
      this.props,
    );
    this.theme = theme;
    this.styleManager = styleManager;
  }

  componentWillUpdate(nextProps) {
    if (this.styleManager !== nextProps.styleManager) {
      const { theme, styleManager } = ThemeProvider.createDefaultContext(
        nextProps,
      );
      this.theme = theme;
      this.styleManager = styleManager;
    } else if (
      this.theme &&
      nextProps.theme &&
      nextProps.theme !== this.theme
    ) {
      this.theme = nextProps.theme;
      this.styleManager.updateTheme(this.theme);
    }
  }

  theme = undefined;
  styleManager = undefined;

  render() {
    return this.props.children;
  }
}
