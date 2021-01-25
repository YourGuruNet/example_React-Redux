import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className='container'>
      <h1>Counter</h1>
      <p className='counter'>{count}</p>
      <div className='buttons'>
        <button className='btn' onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setCount(0)}>
          restart
        </button>
        <button className='btn' onClick={() => setCount(count + 1)}>
          increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
