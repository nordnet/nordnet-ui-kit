const jsdom = require('jsdom');

// prettier-ignore
global.document = jsdom.jsdom('<html><head><script></script></head><body><div id="app"></div></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
