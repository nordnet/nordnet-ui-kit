import color from './color';

export default function createPalette({ type = 'light' }) {
  const palette = { ...color };

  const proxyIsAvailable = typeof window !== 'undefined' ? 'Proxy' in window : true;

  if (!proxyIsAvailable) {
    return palette;
  }

  const pinkProxieFactory = rootKey =>
    new Proxy(
      {},
      {
        get(target, key) {
          // eslint-disable-next-line no-console
          console.error(
            `Accessing deprecated "theme.pallete${rootKey}.${key}", defaults to "pink"`,
          );
          return 'pink';
        },
      },
    );

  return {
    name: 'nordnet',
    type,
    ...color,
    color: pinkProxieFactory('.color'),
    variant: pinkProxieFactory('.variant'),
    // text: pinkProxieFactory('').text,
    // action: pinkProxieFactory('').action,
    // background: pinkProxieFactory('').background,
    text: 'pink',
    action: 'pink',
    background: 'pink',
    shades: {
      light: {
        text: pinkProxieFactory('.shades.light.text'),
        action: pinkProxieFactory('.shades.light.action'),
        background: pinkProxieFactory('.shades.light.background'),
      },
      dark: {
        text: pinkProxieFactory('.shades.dark.text'),
        action: pinkProxieFactory('.shades.dark.action'),
        background: pinkProxieFactory('.shades.dark.background'),
      },
    },
    // variant: pinkProxieFactory('').variant,
    // accent: pinkProxieFactory('').accent,
    // error: pinkProxieFactory('').errror,
    accent: 'pink',
    error: 'pink',
  };
}

export { createPalette };
