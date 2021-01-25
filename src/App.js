import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';

// Setup initial states
const defaultState = {
  count: 75,
  name: 'Arvis',
};
// Reducer setup
const reducer = (state, action) => {
  return state;
};

// Store setup
const store = createStore(reducer, defaultState);

//console.log(store.getState());

const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
