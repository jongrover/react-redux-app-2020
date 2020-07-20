import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import './App.css';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const decr = () => dispatch(decrement());
  const incr = () => dispatch(increment());

  return (
    <div className="App">
      <h1>Simple React/Redux Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={decr}>-</button> <button onClick={incr}>+</button>
    </div>
  );
}

export default App;
