import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBackground, selectBackground } from "./BackgroundSlice";

export const Background = () => {
  const dispatch = useDispatch();
  const background = useSelector(selectBackground);

  console.log(background);
  useEffect(() => {
    if (background === undefined) {
      dispatch(fetchBackground());
    }
  }, [dispatch, background]);

  let image = "";

  if (background !== undefined) {
    image = background.urls.regular;
  }

  return (
    <>
      <img
        id="background"
        src={image}
        alt="Random inspiration background that shows something inspirational"
      />
    </>
  );
};
