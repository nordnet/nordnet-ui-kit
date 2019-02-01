const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { JSDOM } = require('jsdom');

Enzyme.configure({ adapter: new Adapter() });

// prettier-ignore
global.document = (new JSDOM('<html><head><script></script></head><body><div id="app"></div></body></html>')).window.document;
global.window = document.defaultView;
global.navigator = global.window.navigator;

require('raf/polyfill');
