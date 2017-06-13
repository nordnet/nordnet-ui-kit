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
  boxSizing: 'border-box',

  [`&${classPrefixSpace ? ' ' : ''}.${name}`]: {
    '&-enter': {
      height: 0,
      maxHeight: 0,

      [`&.${name}-enter-active`]: {
        height: estimatedHeight,
        maxHeight: estimatedHeight,
        transitionTimingFunction: easingEnterFunction,
        transitionProperty: 'max-height, height',
        transitionDuration: transitionEnterTimeout,
      },
    },
    '&-leave': {
      height: estimatedHeight,
      maxHeight: estimatedHeight,
      transitionTimingFunction: easingLeaveFunction,
      transitionProperty: 'max-height, height',
      transitionDuration: transitionLeaveTimeout,

      [`&.${name}-leave-active`]: {
        height: 0,
        maxHeight: 0,
      },
    },
  },
});
