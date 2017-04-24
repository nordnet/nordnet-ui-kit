import React, { PropTypes } from 'react';
import cn from 'classnames';
import SegmentedControlStyles from './segmented-control-styles';

class SegmentedControl extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    if (this.props.type === 'radio') {
      this.state = {
        selected: props.value,
      };
    } else if (this.props.type === 'checkbox') {
      // If multiple children
      if (this.props.children.reduce) {
        this.state = this.props.children.reduce((previous, child) => ({
          ...previous,
          [child.props.value]: !!child.props.checked,
        }), {});
      } else {
        const childProps = this.props.children.props;
        this.state = {
          [childProps.value]: !!childProps.checked,
        };
      }
    }
    this.renderChild = this.renderChild.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.childSelectedState = this.childSelectedState.bind(this);
    this.classes = this.context.styleManager.render(SegmentedControlStyles);
  }

  childSelectedState() {
    // Multiple children
    if (this.props.children.reduce) {
      if (this.props.type === 'radio') {
        return this.props.children.reduce((previous, child) => ({
          ...previous,
          [child.props.value]: this.state.selected === child.props.value,
        }), {});
      } else if (this.props.type === 'checkbox') {
        return this.props.children.reduce((previous, child) => ({
          ...previous,
          [child.props.value]: this.state[child.props.value],
        }), {});
      }
    } else {
      // Single child, only works with 'checkbox' behavior
      const childValue = this.props.children.props.value;
      return {
        [childValue]: this.state[childValue],
      };
    }
    return null;
  }

  handleChange(e) {
    const index = e.currentTarget.value;
    if (this.props.type === 'radio') {
      this.setState({
        selected: index,
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.childSelectedState());
        }
      });
    } else if (this.props.type === 'checkbox') {
      this.setState({
        [index]: !this.state[index],
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.childSelectedState());
        }
      });
    }
  }

  renderChild(child, index = 0) {
    const childValue = (child.props || {}).value;
    let selected;
    if (this.props.type === 'radio') {
      selected = childValue === this.state.selected;
    } else if (this.props.type === 'checkbox') {
      selected = this.state[childValue];
    }
    const usedClassName = cn(this.classes.label, {
      [this.classes.selected]: selected,
      [this.classes.buttonLeft]: index === 0,
      [this.classes.buttonRight]: this.props.children.map ? index === this.props.children.length - 1 : true,
    });
    const inputId = `sc-${this.props.name}-${index}`;
    return (<span className={usedClassName} key={`sc-${this.props.name}-${childValue}`}>
      <input
        type={this.props.type}
        id={inputId}
        name={`sc-${this.props.name}`}
        value={childValue || index}
        checked={selected}
        onChange={this.handleChange}
      />
      <label htmlFor={inputId}>{ child }</label>
    </span>);
  }

  render() {
    // If we have an array of children, then we have the map function
    return (
      <span style={this.props.style} className={cn(this.classes.root, this.props.className)}>
        { this.props.children.map ? this.props.children.map(this.renderChild) : this.renderChild(this.props.children) }
      </span>
    );
  }
}

SegmentedControl.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  value: PropTypes.string,
};

SegmentedControl.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default SegmentedControl;
