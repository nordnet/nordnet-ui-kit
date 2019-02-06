import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import Icon from '../icon/icons';
import Spinner from '../spinner';
import styles from './subsection-styles';

class Subsection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleActive: false,
      toggleDuration: this.props.theme.transitions.duration.shorter * 1.1,
      toggled: this.props.toggled,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.toggled !== nextProps.toggled) {
      this.toggle(nextProps.toggled);
    }
  }

  toggle = toggled => {
    this.setState({ toggleActive: true }, () => {
      setTimeout(() => this.setState({ toggleActive: false, toggled }), this.state.toggleDuration);
    });
  };

  handleToggle = () => {
    if (!this.props.loading) {
      this.toggle(!this.state.toggled);
    }
  };

  render() {
    const {
      title: Title,
      icon: CustomIcon,
      children,
      loading,
      noSeparator,
      estimatedHeight,
      classes,
    } = this.props;
    const { toggled, toggleActive } = this.state;

    return (
      <div className={cn(classes.root, { [classes.noSeparator]: noSeparator })}>
        <div className={classes.wrapper}>
          {CustomIcon && (
            <div className={cn(classes.icon, classes.desktopOnly)}>
              <CustomIcon />
            </div>
          )}
          <div className={classes.mainSection}>
            <button
              className={cn(classes.title, { [classes.loading]: loading })}
              onClick={this.handleToggle}
              type="button"
            >
              <div className={classes.titleContent}>
                <div className={classes.titleLeft}>
                  {CustomIcon && (
                    <div className={cn(classes.icon, classes.mobileOnly)}>
                      <CustomIcon />
                    </div>
                  )}
                  <Title />
                </div>
                <div className={classes.titleRight}>
                  {loading && <Spinner />}
                  {!loading && (
                    <div className={cn(classes.chevron, classes.mobileOnly)}>
                      {toggled ? <Icon.ChevronUp /> : <Icon.ChevronDown />}
                    </div>
                  )}
                </div>
              </div>
            </button>
            <div
              style={toggleActive ? { maxHeight: estimatedHeight, overflow: 'hidden' } : {}}
              className={cn(classes.children, { [classes.toggled]: toggled })}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Subsection.propTypes = {
  title: PropTypes.func.isRequired,
  icon: PropTypes.func,
  /** True if automatically expanded * */
  toggled: PropTypes.bool,
  /** Indicate the content is loading * */
  loading: PropTypes.bool,
  /** Estimated height of the content. Use to avoid jumpy animation. * */
  estimatedHeight: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  /** Hide the bottom separator * */
  noSeparator: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

Subsection.defaultProps = {
  icon: null,
  toggled: false,
  loading: false,
  estimatedHeight: 100,
  noSeparator: false,
  children: null,
};

const enhance = injectSheet(styles);

export { Subsection as Component, styles };

export default enhance(Subsection);
