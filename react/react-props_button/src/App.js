import React from "react";
import "./styles.css";

function Button({ color, disabled, text, handleClick }) {
  return (
    <button disabled={disabled} color={color} onClick={handleClick}>
      {text}
    </button>
  );
}

export default function App() {
  function handleClick() {
    console.log("you clicked me");
  }
  return <Button onClick={handleClick} />;
}
