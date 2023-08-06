import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sum valueA={20} valueB={10} />
    </div>
  );
}
function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
