import PropTypes from 'prop-types';

export const colShape = PropTypes.shape({
  key: PropTypes.string,
  baseKey: PropTypes.string.isRequired,
  headerLabel: PropTypes.string,
  useBase: PropTypes.bool,
  hideHeaderLabel: PropTypes.bool,
  sortable: PropTypes.bool.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.string,
  type: PropTypes.string,
  responsiveProps: PropTypes.shape({
    flexOrder: PropTypes.number,
    flexBasisMobile: PropTypes.number,
    hiddenOnDesktop: PropTypes.bool,
    className: PropTypes.string,
    alignMobile: PropTypes.string,
  }),
});

export const sortingLocalizationShape = PropTypes.shape({
  asc: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  ariaLabel: PropTypes.func.isRequired,
});

export default {
  sortingLocalizationShape,
  colShape,
};
