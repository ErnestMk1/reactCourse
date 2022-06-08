import React, { useState } from 'react';

const HookCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default HookCounter;
