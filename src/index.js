import components from './components';
import theme from './theme';
import hocs from './hocs';

console.log({ components });

const kit = {
  ...components,
  theme,
  ...hocs,
};

console.log({ kit });

export default kit;
