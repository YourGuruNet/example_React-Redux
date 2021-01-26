import React from 'react';
import { connect } from 'react-redux';
import { modalOpen } from './Modal';

export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const RESET = 'RESET';

export const Reset = () => {
  return { type: RESET };
};
export const Increase = () => {
  return { type: INCREASE };
};
export const Decrease = () => {
  return { type: DECREASE };
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
const Counter = ({ name, count, Increase, modalOpen, Decrease }) => {
  // console.log(props);
  return (
    <div className='container'>
      <h1>Counter</h1>
      <h2>{`Hey, ${name}! Now
       you can test this app`}</h2>

      <p className='counter'>{count}</p>
      <div className='buttons'>
        <button className='btn' onClick={Decrease}>
          decrease
        </button>
        <button
          className='btn'
          onClick={() =>
            modalOpen(`Hey ${name}! Do you wanna restart your counter?`)
          }
        >
          restart
        </button>
        <button className='btn' onClick={Increase}>
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
const mapDispatchToProps = {
  Increase,
  modalOpen,
  Decrease,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
