import easings from '../../styles/transitions/easings';
import durations from '../../styles/transitions/durations';

export default ({
  name,
  estimatedHeight = 500,
  classPrefixSpace = false,
  transitionEnterTimeout = durations.faster,
  transitionLeaveTimeout = durations.fastest,
  easingEnterFunction = easings.easeIn,
  easingLeaveFunction = easings.easeOut,
}) => ({
  overflow: 'hidden',
  maxHeight: 'none',

  [`&${classPrefixSpace ? ' ' : ''}.${name}`]: {
    '&-enter': {
      maxHeight: 0,

      [`&.${name}-enter-active`]: {
        maxHeight: estimatedHeight,
        transitionTimingFunction: easingEnterFunction,
        transitionProperty: 'max-height',
        transitionDuration: transitionEnterTimeout,
      },
    },
    '&-leave': {
      maxHeight: estimatedHeight,
      transitionTimingFunction: easingLeaveFunction,
      transitionProperty: 'max-height',
      transitionDuration: transitionLeaveTimeout,

      [`&.${name}-leave-active`]: {
        maxHeight: 0,
      },
    },
  },
});
