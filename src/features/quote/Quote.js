import React from "react";
import { useSelector } from "react-redux";
import "./Quote.css";
import { selectQuote } from "./QuoteSlice";

export const Quote = () => {
  const { text, author } = useSelector(selectQuote).quote;

  return (
    <div className="Quote">
      <h4>"{text}"</h4>
      <h5>{author}</h5>
    </div>
  );
};
