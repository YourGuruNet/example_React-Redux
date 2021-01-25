import React from 'react';
import Counter, { reducer } from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Setup initial states
const defaultState = {
  count: 0,
  name: prompt('Insert your name', 'Name'),
};

// Store setup
const store = createStore(reducer, defaultState);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
