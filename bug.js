```javascript
//Incorrect usage of setState in a React functional component
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1); // Incorrect: count is stale closure
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default MyComponent;
```