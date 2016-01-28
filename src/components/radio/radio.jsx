import React from 'react';
import PureComponent from 'react-pure-render/component';
import classNames from 'classnames';
import './radio.scss';

class Radio extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
      disabled: props.disabled,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      checked: event.target.checked,
    });
  }

  renderRadio() {
    return (
      <div className="radio__input">
        <input
          { ...this.props }
          type="radio"
          checked={ this.state.checked }
          disabled={ this.state.disabled }
          value={ this.props.value }
          onChange={ this.handleChange }
        />
        <span />
      </div>
    );
  }

  renderLabel() {
    if (!this.props.label) return null;

    return <span className="radio__label">{ this.props.label }</span>;
  }

  render() {
    const classes = classNames('radio', {
      'radio--is-disabled': this.props.disabled,
    }, this.props.className);

    return (
      <label className={ classes }>
        { this.renderRadio() }
        { this.renderLabel() }
      </label>
    );
  }
}

Radio.propTypes = {
  className: React.PropTypes.string,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
};

export default Radio;
