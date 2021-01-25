import React from 'react';
import { connect } from 'react-redux';

export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const RESET = 'RESET';

// Reducer setup
export const reducer = (state, action) => {
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
function mapStateToProps(state, dispatch) {
  return {
    count: state.count,
    name: state.name,
  };
}
// Functions
function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({ type: INCREASE }),
    reset: () => dispatch({ type: RESET }),
    decrease: () => dispatch({ type: DECREASE }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
