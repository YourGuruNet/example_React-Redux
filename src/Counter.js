import React from 'react';
import { connect } from 'react-redux';
import { MODAL_OPEN } from './Modal';

export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const RESET = 'RESET';

export const Reset = () => {
  return { type: RESET };
};

// Setup initial states
const defaultState = {
  count: 0,
  name: prompt('Insert your name', 'Name'),
};
// Reducer setup
export const CounterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
const Counter = ({ name, count, increase, decrease, reset }) => {
  // console.log(props);
  return (
    <div className='container'>
      <h1>{`Hey, ${name}! Now
       you can test this app`}</h1>
      <h1>Counter</h1>
      <p className='counter'>{count}</p>
      <div className='buttons'>
        <button className='btn' onClick={decrease}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          restart
        </button>
        <button className='btn' onClick={increase}>
          increase
        </button>
      </div>
    </div>
  );
};
// States
function mapStateToProps({ countState: { count, name } }) {
  return {
    count: count,
    name: name,
  };
}
// Functions
function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({ type: INCREASE }),
    reset: () =>
      dispatch({
        type: MODAL_OPEN,
        payload: { text: 'Do you wanna restart your counter?' },
      }),
    decrease: () => dispatch({ type: DECREASE }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
