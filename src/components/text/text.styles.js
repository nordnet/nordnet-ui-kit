import { sizes, weights } from '../../styles/typography';

export default {
  ...sizes,
  regular: {
    fontWeight: weights.regular,
  },
  bold: {
    fontWeight: weights.bold,
  },
  extrabold: {
    fontWeight: weights.extrabold,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
};
