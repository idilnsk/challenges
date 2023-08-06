import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const buttonHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={buttonHandler}>
          +
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
