import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState(false);

  function handleClick() {
    // Check that the value changes correctly.
    setActive(!active);
  }

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {active ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
