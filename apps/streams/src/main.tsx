import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  createStore } from 'redux';

import App from './app/components/app';
import reducers from './app/core/reducers'

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
