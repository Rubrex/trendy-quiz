import React from "react";
import { Outlet } from "react-router-dom";

const QuizCardsContainer = () => {
  return (
    <div className="container mx-auto">
      <div className="my-20">
        <Outlet />
      </div>
    </div>
  );
};

export default QuizCardsContainer;
