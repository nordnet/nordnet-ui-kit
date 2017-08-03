const prop = prop => x => x[prop];

const initialHeight = {
  height: 0,
  maxHeight: 0,
};

export default {
  height: {
    overflow: 'hidden',
    boxSizing: 'border-box',
    '&-enter': initialHeight,
    '&-enter-active': {
      // height: props => props.estimatedHeight,
      height: 210,
      // maxHeight: props => props.estimatedHeight,
      maxHeight: 210,
      transitionProperty: 'max-height, height',
      // transitionTimingFunction: props => props.easingEnterFunction,
      transitionTimingFunction: 'cubic-bezier(.4, 0, 1, 1)',
      // transitionDuration: props => props.transitionEnterTimeout,
      transitionDuration: 200,
    },
    '&-leave': {
      // height: props => props.estimatedHeight,
      height: 210,
      // maxHeight: props => props.estimatedHeight,
      maxHeight: 210,
      transitionProperty: 'max-height, height',
      // transitionTimingFunction: props => props.easingLeaveFunction,
      transitionTimingFunction: 'cubic-bezier(0, 0, .2, 1)',
      // transitionDuration: props => props.transitionLeaveTimeout,
      transitionDuration: 150,
    },
    '&-leave-active': initialHeight,
  },
};
