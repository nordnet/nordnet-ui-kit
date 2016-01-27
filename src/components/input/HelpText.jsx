import React from 'react';

function HelpText(props) {
  if (props.children) {
    return <span className="input__help-text">{ props.children }</span>;
  }

  return <span />;
}

export default HelpText;
