import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import Photos from "./components/Photos";
import { useState } from "react";
function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncByAmt() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <h1 className="text-3xl m-5">Redux Toolkit</h1>
      <div className="flex items-center">
        <button
          className="bg-red-200 px-6 py-5 m-5"
          onClick={handleDecrementClick}
        >
          -
        </button>
        <p className="bg-red-200 px-6 py-5 m-5">Count {count}</p>
        <button
          className="bg-red-200 px-6 py-5 m-5"
          onClick={handleIncrementClick}
        >
          +
        </button>
        
      </div>{" "}
      <div className="flex items-center">
        
        <button className="bg-red-200 px-6 py-5 m-5" onClick={handleResetClick}>
          Reset
        </button>
        <input
          className="bg-red-200 px-6 py-5 m-5"
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Inc. by Amount"
        />
        <button className="bg-red-200 px-6 py-5 m-5" onClick={handleIncByAmt}>
          increment By Amount
        </button>
      </div>
      <div>
        <Photos />
      </div>
    </>
  );
}

export default App;
