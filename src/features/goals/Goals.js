import React from "react";
import { useSelector } from "react-redux";
import { Goal } from "./goal/Goal";
import "./Goals.css";
import { selectGoals } from "./GoalsSlice";

export const Goals = () => {
  const goals = useSelector(selectGoals).goals;

  const colors = ["#BA7077", "#819384", "#C18F6C", "#71899C"];
  return (
    <div className="Goals">
      {goals.map((goal) => {
        return (
          <Goal
            key={goal.id}
            id={goal.id}
            text={goal.text}
            color={colors[goal.id % 4]}
          />
        );
      })}
    </div>
  );
};
