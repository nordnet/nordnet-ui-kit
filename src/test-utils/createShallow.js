import { ThemeProvider } from '../styles';

export default function createShallow(shallow, otherContext = {}) {
  const { theme, styleManager } = ThemeProvider.createDefaultContext();
  const context = { theme, styleManager, ...otherContext };
  const shallowWithContext = function shallowWithContext(node, options = {}) {
    return shallow(node, {
      context: {
        ...context,
        ...options.context,
      },
    });
  };

  shallowWithContext.context = context;

  return shallowWithContext;
}
