import { theme } from '../styles/theme';

const selector = x => x.split(' ').map(_ => `.${_}`).join('');
const merge = (x, y) => Object.assign({}, x, y);
const selectorsReducer = classes => (state, item) => merge(state, {
  [item]: selector(classes[item]),
});
const selectors = classes => Object.keys(classes)
  .filter(y => y[0] !== '.')
  .reduce(selectorsReducer(classes), {});

function decorateShallow(enzymeShallow) {
  return function shallow(child) {
    const c = enzymeShallow(child, { context: { theme } }).shallow();
    const classes = c.prop('classes');
    const w = c.shallow();
    w.classes = classes;
    w.selectors = selectors(classes);
    return w;
  };
}

export default decorateShallow;
