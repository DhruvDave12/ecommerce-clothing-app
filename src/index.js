import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  // provider is a component class that gives the stuff from redux store to our app
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />

      </PersistGate>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

