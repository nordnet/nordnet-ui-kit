import { stripIndent } from 'common-tags';
import { ThemeProvider } from '../styles';

export default function createShallow(shallow, otherContext = {}) {
  const { theme, styleManager } = ThemeProvider.createDefaultContext();
  const context = { theme, styleManager, ...otherContext };
  const shallowWithContext = function shallowWithContext(node, options = {}) {
    // eslint-disable-next-line
    console.warn(stripIndent`
      nordnet-ui-kit's \`createShallow\` is deprecated and will be removed in major release.
      Please use react-jss, default enzyme's shallow and mockClasses utility.
      See more https://github.com/nordnet/nordnet-ui-kit/releases/tag/v1.7.0
    `);
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
