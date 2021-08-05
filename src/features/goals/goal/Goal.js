import React from "react";
import { useDispatch } from "react-redux";
import { removeGoal } from "../GoalsSlice";
import "./Goal.css";

export const Goal = ({ id, text, color }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="Buttons">
        <div
          className="Remove"
          onClick={() => dispatch(removeGoal({ id: id }))}
        >
          Remove
        </div>
        <div className="Done">Done</div>
      </div>

      <div className="Goal" style={{ backgroundColor: color }}>
        <p>{text}</p>
      </div>
    </div>
  );
};
