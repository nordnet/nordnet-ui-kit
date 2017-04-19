import React, { PropTypes } from 'react';
import classNames from 'classnames';
import WidgetStyles from './widget-styles';

function renderHeader(header, classes) {
  let headerBody = header;

  if (typeof header === 'string') {
    headerBody = <h4 className={classes.heading}>{ header }</h4>;
  }

  return (
    <div>
      { headerBody }
    </div>
  );
}

export default function Widget({ header, children, fullWidth, className, ...rest }, { styleManager }) {
  const classes = styleManager.render(WidgetStyles);
  const usedClassName = classNames(classes.widget, className);
  const bodyClasses = classNames(classes.body, {
    [classes.fullWidth]: fullWidth,
    [classes.noHeader]: !header,
  });

  return (
    <div {...rest} className={usedClassName}>
      { header ? renderHeader(header, classes) : null }
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

Widget.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};
