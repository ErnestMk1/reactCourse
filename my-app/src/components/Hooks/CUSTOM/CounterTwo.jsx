import React from "react";
import useCounter from "./hooks/useCounter";

const CounterTwo = () => {
  const [count, increment, decrement, reset] = useCounter(2, 2);

  return (
    <div>
      <h3>Count - {count}</h3>

      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterTwo;
