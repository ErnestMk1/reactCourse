import { useState } from 'react';

const useCounter = (param, value) => {
  const [count, setCounter] = useState(param);

  const increment = () => {
    setCounter(count + value);
  };
  const decrement = () => {
    setCounter(count - value);
  };
  const reset = () => {
    setCounter(0);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
