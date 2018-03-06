import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import Animate from '../animate';
import Icon from '../icon/icons';
import Spinner from '../spinner';
import styles from './subsection-styles';

class Subsection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: this.props.toggled,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.toggled !== nextProps.toggled) {
      this.setState({
        toggled: nextProps.toggled,
      });
    }
  }

  toggle = () => this.setState({ toggled: !this.state.toggled });

  render() {
    const { title, icon, children, loading, estimatedHeight, noSeparator, classes } = this.props;
    const { toggled } = this.state;
    const Title = title;
    const CustomIcon = icon;

    return (
      <div className={cn(classes.root, { [classes.noSeparator]: noSeparator })}>
        <div className={classes.wrapper}>
          {CustomIcon && (
            <div className={cn(classes.icon, classes.desktop)}>
              <CustomIcon />
            </div>
          )}
          <div className={classes.mainSection}>
            <button className={cn(classes.title)} onClick={this.toggle}>
              <div className={classes.titleLeft}>
                {CustomIcon && (
                  <div className={cn(classes.icon, classes.mobile)}>
                    <CustomIcon />
                  </div>
                )}
                <Title />
              </div>
              <div className={classes.titleRight}>
                {loading ? (
                  <Spinner />
                ) : (
                  <div className={cn(classes.mobile, classes.chevron)}>{toggled ? <Icon.ChevronUp /> : <Icon.ChevronDown />}</div>
                )}
              </div>
            </button>
            <Animate className={cn(classes.mobile)} type="height" estimatedHeight={estimatedHeight}>
              {toggled && children}
            </Animate>
            <div className={cn(classes.desktop)}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

Subsection.propTypes = {
  title: PropTypes.func.isRequired,
  icon: PropTypes.func,
  /** True if automatically expanded **/
  toggled: PropTypes.bool,
  /** Indicate the content is loading **/
  loading: PropTypes.bool,
  /** Estimated height of the content. Use to avoid jumpy animation. **/
  estimatedHeight: PropTypes.number,
  /** Hide the bottom separator **/
  noSeparator: PropTypes.bool,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
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
