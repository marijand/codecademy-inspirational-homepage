import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGoal } from "../GoalsSlice";
import "./Goal.css";

export const Goal = ({ id, text, color }) => {
  const dispatch = useDispatch();

  return (
    <div className="Goal" style={{ backgroundColor: color }}>
      <div className="ButtonsDisplay">
        <div
          className="Remove"
          onClick={() => dispatch(removeGoal({ id: id }))}
        >
          Remove
        </div>
        <div className="Done">Done</div>
      </div>
      {text}
    </div>
  );
};
