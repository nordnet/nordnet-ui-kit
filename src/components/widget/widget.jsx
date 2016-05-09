import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './widget.scss';

function renderHeader(header) {
  if (typeof header === 'string') {
    return <h4 className="widget__heading">{ header }</h4>;
  }

  return header;
}

export default function Widget({ header, children, fullWidth, className, ...rest }) {
  const classes = classNames('widget', className);
  const bodyClasses = classNames('widget__body', {
    'widget__body--full-width': fullWidth,
  });

  return (
    <div { ...rest } className={ classes }>
      <div className="widget__header">{ renderHeader(header) }</div>
      <div className={ bodyClasses }>
        { children }
      </div>
    </div>
  );
}

Widget.defaltProps = {
  fullWidth: false,
};

Widget.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};
