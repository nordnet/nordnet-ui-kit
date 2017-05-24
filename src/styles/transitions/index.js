// Easings and durations from material design, see their docs for usage information:
// https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
import easingInternal from './easings';
import durationInternal from './durations';
import modifiers from './transitionModifiers';

export default {
  easing: easingInternal,
  duration: durationInternal,
  modifiers,

  create(props = ['all'], { easing = easingInternal.easeInOut, duration = durationInternal.standard, delay = 0 } = {}) {
    return props.map(prop => `${prop} ${duration}ms ${easing} ${delay}ms`).join(',');
  },

  getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    const constant = height / 36;
    const duration = (4 + 15 * constant ** 0.25 + constant / 5) * 10;

    return Math.round(duration);
  },
};
