import React, { useState, useEffect } from 'react';

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => setCount(count + 1), 1000);
  });

  return (
    <div>
      {count}
    </div>
  );
};

export default IntervalHookCounter;
