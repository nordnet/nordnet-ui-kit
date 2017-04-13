import { PropTypes } from 'react';
import { ThemeProvider } from '../styles';

function cleanStyles() {
  const head = window.document.head;
  const length = head.children.length;
  for (let i = length - 1; i >= 0; i -= 1) {
    if (head.children[i].tagName.toLowerCase() === 'style') {
      head.removeChild(head.children[i]);
    }
  }
}

export default function createMount(mount) {
  cleanStyles();

  const attachTo = window.document.createElement('div');
  attachTo.className = 'app';
  attachTo.setAttribute('id', 'app');
  window.document.body.insertBefore(attachTo, window.document.body.firstChild);
  const { theme, styleManager } = ThemeProvider.createDefaultContext();
  const context = { theme, styleManager };
  const childContextTypes = {
    theme: PropTypes.object,
    styleManager: PropTypes.object,
  };

  const mountWithContext = function mountWithContext(node, options = {}) {
    return mount(node, {
      context: {
        ...context,
        ...options.context,
      },
      attachTo,
      childContextTypes: {
        ...childContextTypes,
        ...options.childContextTypes,
      },
    });
  };

  mountWithContext.context = context;
  mountWithContext.attachTo = attachTo;

  mountWithContext.cleanUp = () => {
    styleManager.reset();
    cleanStyles();
    attachTo.parentNode.removeChild(attachTo);
  };

  return mountWithContext;
}
