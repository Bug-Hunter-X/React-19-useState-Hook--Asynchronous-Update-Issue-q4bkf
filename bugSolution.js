import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [countLog, setCountLog] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      return newCount;
    });
  };

  useEffect(() => {
    setCountLog(count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Logged Count: {countLog}</p> 
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;