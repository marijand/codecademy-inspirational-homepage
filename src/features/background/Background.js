import React from "react";
import { useSelector } from "react-redux";
import { selectBackground } from "./BackgroundSlice";

export const Background = () => {
  const background = useSelector(selectBackground);

  console.log(background);

  return (
    <>
      <img
        id="background"
        src={background}
        alt="Random inspiration background that shows something inspirational"
      />
    </>
  );
};
