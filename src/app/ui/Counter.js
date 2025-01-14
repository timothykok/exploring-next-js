// app/Counter.js (Client Component)
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2 className="counter-title">Client Component</h2>
      <p className="counter-value">Count: {count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}