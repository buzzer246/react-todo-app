import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as ReactDOMClient from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';

import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
)
