import PropTypes from 'prop-types';
import React from 'react';


class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.selectedValue,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const selectedValue = event.target.value;
    this.setState({
      selectedValue,
    });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    const { children, name } = this.props;
    const { selectedValue } = this.state;
    const childArray = Array.isArray(children) ? children : [children];
    const newProps = {
      onChange: this.onChange,
      name: name && name.length ? name : '',
    };

    return (
      <div>
        {
          childArray.map(child =>
            React.cloneElement(child, Object.assign(newProps, { checked: child.props.value === selectedValue })))
        }
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
};


export default RadioGroup;
