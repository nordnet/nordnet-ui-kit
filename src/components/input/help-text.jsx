import React from 'react';

function HelpText(props) {
  if (props.children) {
    return <span className="input__help-text">{ props.children }</span>;
  }

  return <span />; // Stateless functions do not support returning null, see https://github.com/facebook/react/issues/5355
}

HelpText.propTypes = {
  children: React.PropTypes.node,
};

export default HelpText;
