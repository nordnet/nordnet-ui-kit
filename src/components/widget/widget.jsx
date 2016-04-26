import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './widget.scss';

const Widget = props => (
  <div { ...props } className={ classNames('widget', props.className) }>
    { props.header ? props.header : <span /> }
    <div className={ classNames('widget__body', { 'widget__body--full-width': props.fullWidth }) }>
      { props.children }
    </div>
  </div>
);

Widget.defaltProps = {
  fullWidth: false,
};

Widget.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Widget;
