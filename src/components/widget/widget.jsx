import React, { PropTypes } from 'react';
import classNames from 'classnames';
// import './widget.scss';

function renderHeader(header) {
  let headerBody = header;

  if (typeof header === 'string') {
    headerBody = <h4 className="widget__heading">{ header }</h4>;
  }

  return (
    <div className="widget__header">
      { headerBody }
    </div>
  );
}

export default function Widget({ header, children, fullWidth, className, ...rest }) {
  const classes = classNames('widget', className);
  const bodyClasses = classNames('widget__body', {
    'widget__body--full-width': fullWidth,
    'widget__body--no-header': !header,
  });

  return (
    <div {...rest} className={classes}>
      { header ? renderHeader(header) : <span /> }
      <div className={bodyClasses}>
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
