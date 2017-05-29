import easings from '../easings';
import durations from '../durations';

export default ({
  name,
  estimatedHeight = 500,
  classPrefixSpace = false,
  transitionEnterTimeout = durations.faster,
  transitionLeaveTimeout = durations.fastest,
}) => ({
  overflow: 'hidden',
  maxHeight: 'auto',

  [`&${classPrefixSpace ? ' ' : ''}.${name}`]: {
    '&-enter': {
      maxHeight: 0,

      [`&.${name}-enter-active`]: {
        maxHeight: estimatedHeight,
        transitionTimingFunction: easings.easeIn,
        transitionProperty: 'max-height',
        transitionDuration: transitionEnterTimeout,
      },
    },
    '&-leave': {
      maxHeight: estimatedHeight,
      transitionTimingFunction: easings.easeOut,
      transitionProperty: 'max-height',
      transitionDuration: transitionLeaveTimeout,

      [`&.${name}-leave-active`]: {
        maxHeight: 0,
      },
    },
  },
});
