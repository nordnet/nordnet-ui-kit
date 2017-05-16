// Easings and durations from material design, see their docs for usage information:
// https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations

const easingInternal = {
  easeInOut: 'cubic-bezier(.4, 0, .2, 1)',
  easeOut: 'cubic-bezier(0, 0, .2, 1)',
  easeIn: 'cubic-bezier(.4, 0, 1, 1)',
  sharp: 'cubic-bezier(.4, 0, .6, 1)',
};

const durationInternal = {
  shortest: 150,
  shorter: 200,
  short: 250,

  standard: 300,
  complex: 375,

  enteringScreen: 225,
  leavingScreen: 195,
};

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
