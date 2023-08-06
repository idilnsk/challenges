import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          onClick={incrementCount}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={decrementCount}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
