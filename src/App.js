import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';

// Reducer setup
const reducer = () => {
  console.log('Reducer works');
};

// Store setup
const store = createStore(reducer);

const App = () => {
  return <Counter />;
};

export default App;
