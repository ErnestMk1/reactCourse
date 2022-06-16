import React, { useContext } from "react";
import { CountContext } from "../../../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  const countDispatch = countContext.countDispatch;

  return (
    <div>
      Component A : 

      <button onClick={() => countDispatch('increment')}>Increment</button>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
    </div>
  );
};

export default ComponentA;
