import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counter/counterSlice";

function Home() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            Increment
          </button>
          <span>{count?.value}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
