import React from "react";
import { useState } from "react";
import "./UserInput.css";

export const UserInput = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="UserInput">
      <h1>What's on your mind today?</h1>
      <input />
    </div>
  );
};
