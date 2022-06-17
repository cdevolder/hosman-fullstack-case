import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../http_addresses/store';
import Main from '../http_addresses/components/Main';

const targetDiv = document.getElementById('root');

if (targetDiv) {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    targetDiv
  );
}
