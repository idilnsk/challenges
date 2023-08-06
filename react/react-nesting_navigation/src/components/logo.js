import React from "react";
import Images from "./image";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <a href="#">
      <Images className="round-image" src={logo} alt="logo" />
    </a>
  );
}
