import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import invoiceDeatilReducer from './store/invoiceDetailReducers';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from "redux-thunk";

const persistConfig = {
  key:'root',
  storage
}
const persistedReducer = persistReducer(persistConfig,invoiceDeatilReducer);

const store = createStore(persistedReducer,applyMiddleware(thunk))
const persistor=persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
