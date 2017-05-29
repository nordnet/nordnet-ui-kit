import easingInternal from './easings';
import durationInternal from './durations';

export default {
  easing: easingInternal,
  duration: durationInternal,

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
