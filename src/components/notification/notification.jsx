import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import notificationStyles from './notification.styles';
import { Icon } from '../../';

const Notification = ({
  classes,
  children,
  className,
  modifier,
  // variant,
  style,
}) => (
  <div
    className={classNames(
      classes.notification,
      classes[modifier],
      // classes.variant[variant],
      className,
    )}
    style={style}
  >
    <div className={classes.content}>
      <Icon.Info className={classes.icon} />
      {children}
      <Icon.Close className={classes.close} />
    </div>
  </div>
);

Notification.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
  style: PropTypes.object,
  // variant: PropTypes.oneOf(['small', 'big']),
};

Notification.defaultProps = {
  variant: 'small',
};

export { Notification as Component };
export default injectSheet(notificationStyles)(Notification);
