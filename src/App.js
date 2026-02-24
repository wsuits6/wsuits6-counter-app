import React, { useState } from "react";

function App() {

  // Declare state
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount(prev => prev + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default App;