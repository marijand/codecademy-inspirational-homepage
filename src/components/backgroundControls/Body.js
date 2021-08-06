import React from "react";
import "./Body.css";

import { UserInput } from "../userInput/UserInput";
import { Goals } from "../../features/goals/Goals";

import leftArrow from "../../resources/line-angle-left.svg";
import rightArrow from "../../resources/line-angle-right.svg";

export const Body = () => {
  return (
    <div className="Body">
      <img src={leftArrow} width={25} alt="Left Arrow" />
      <div style={{ flexGrow: "3" }}>
        <UserInput />
        <Goals />
      </div>
      <img src={rightArrow} width={25} alt="Right Arrow" />
    </div>
  );
};
