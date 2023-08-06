import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <button>First Button</button>
      <button>Second Button</button>
      <button>Third Button</button>
      <button>Fourth Button</button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
