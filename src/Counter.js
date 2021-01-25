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
const Counter = (props) => {
  // console.log(props);
  return (
    <div className='container'>
      <h1>{`Hey, ${props.name}! Now
       you can test this app`}</h1>
      <h1>Counter</h1>
      <p className='counter'>{props.count}</p>
      <div className='buttons'>
        <button
          className='btn'
          onClick={() => props.dispatch({ type: DECREASE })}
        >
          decrease
        </button>
        <button className='btn' onClick={() => props.dispatch({ type: RESET })}>
          restart
        </button>
        <button
          className='btn'
          onClick={() => props.dispatch({ type: INCREASE })}
        >
          increase
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
    name: state.name,
  };
}
export default connect(mapStateToProps)(Counter);
