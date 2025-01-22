```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1); // Correct: Uses functional update
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