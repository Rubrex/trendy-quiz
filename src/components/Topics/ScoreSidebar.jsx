import React from "react";

const ScoreSidebar = ({ score }) => {
  return (
    <div className="sticky top-0">
      <p>Correct Ans: {score.correct}</p>
      <p>Incorrect Ans: {score.incorrect}</p>
    </div>
  );
};

export default ScoreSidebar;
