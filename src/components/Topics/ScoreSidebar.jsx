import React from "react";

const ScoreSidebar = ({ score }) => {
  return (
    <div className="sticky top-10 neomorph mr-10 py-10">
      <p className=" font-semibold text-lg text-green-800 hop-in">
        Correct Ans: {score.correct}
      </p>
      <p className=" font-semibold text-lg text-red-800 hop-in">
        Incorrect Ans: {score.incorrect}
      </p>
    </div>
  );
};

export default ScoreSidebar;
