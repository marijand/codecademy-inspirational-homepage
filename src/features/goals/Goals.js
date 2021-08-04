import React from "react";
import { useSelector } from "react-redux";
import { Goal } from "./goal/Goal";
import "./Goals.css";
import { selectGoals } from "./GoalsSlice";

export const Goals = () => {
  const goals = useSelector(selectGoals).goals;

  return (
    <div className="Goals">
      {goals.map((goal) => {
        return <Goal key={goal.key} text={goal.text} />;
      })}
    </div>
  );
};
