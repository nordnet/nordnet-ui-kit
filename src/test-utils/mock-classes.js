const mockReducer = (prev, curr) => Object.assign({}, prev, { [curr]: curr });

const mockClasses = styles => Object.keys(styles).reduce(mockReducer, {});

export default mockClasses;
