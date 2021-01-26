import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CounterReducer } from './Counter';
import { ModalReducer } from './Modal';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// Store setup
const store = createStore(
  combineReducers({
    countState: CounterReducer,
    modalState: ModalReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
