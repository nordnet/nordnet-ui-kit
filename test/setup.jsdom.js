const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jsdom = require('jsdom');

Enzyme.configure({ adapter: new Adapter() });

// prettier-ignore
global.document = jsdom.jsdom('<html><head><script></script></head><body><div id="app"></div></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

require('raf/polyfill');
