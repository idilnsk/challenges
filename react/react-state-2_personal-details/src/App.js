import React from "react";
import "./styles.css";
import Form from "./components/Form.js";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateUser = (userData) => {
    console.log("created new user:", userData);
    const { email, name } = userData;
    setEmail(email);
    setName(name);
  };
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">John doe</span>
      </p>
      <p>
        Email: <span className="output">John@Doe.com</span>
      </p>
    </div>
  );
}
