import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import cn from 'classnames';

const styles = {
  sameRow: {
    display: 'inline-block',
  },
  margin: {
    marginRight: 20,
  },
};

class RadioGroup extends React.Component {
  state = {
    selectedValue: this.props.selectedValue,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedValue && nextProps.selectedValue !== this.state.selectedValue) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.selectedValue !== nextState.selectedValue) {
      if (this.props.onChange) {
        this.props.onChange({ target: { value: nextState.selectedValue } });
      }
    }
  }

  handleOnChange = event => {
    const selectedValue = event.target.value;
    this.setState({
      selectedValue,
    });
  };

  render() {
    const { children, name, orientation, classes } = this.props;
    const { selectedValue } = this.state;
    const childArray = Array.isArray(children) ? children : [children];
    const newProps = {
      onChange: this.handleOnChange,
      name: name && name.length ? name : '',
    };

    return (
      <div>
        {childArray.map((child, index) =>
          React.cloneElement(
            child,
            Object.assign(newProps, {
              className: cn({
                [classes.sameRow]: orientation === 'horizontal',
                [classes.margin]: index !== childArray.length - 1,
              }),
              checked: child.props.value === selectedValue,
            }),
          ),
        )}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  /** The value to be selected */
  selectedValue: PropTypes.string,
  /** The name of the checkbox elements, leave blank to set names on child elements */
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  /** Elements of type `<Input type="checkbox" />` */
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  classes: PropTypes.shape().isRequired,
};

RadioGroup.defaultProps = {
  orientation: 'vertical',
};

export { RadioGroup as Component, styles };
export default injectSheet(styles)(RadioGroup);
