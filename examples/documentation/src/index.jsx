import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import htmlWrapper from './components/htmlWrapper';
import 'normalize.css';
import App from './app.jsx';

if (typeof document !== 'undefined') {
  ReactDOM.render(
    <App />,
    document.getElementById('react-mount')
  );
}

module.exports = function render(locals, callback) {
  const html = htmlWrapper({
    title: 'Nordnet UI Kit',
    body: renderToString(<App />),
  });
  callback(null, html);
};
