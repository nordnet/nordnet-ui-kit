import { theme } from '..';

const mockReducer = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const coerceStyles = styles => (typeof styles === 'function' ? styles(theme) : styles);

const mockClasses = styles => Object.keys(coerceStyles(styles)).reduce(mockReducer, {});

export default mockClasses;
