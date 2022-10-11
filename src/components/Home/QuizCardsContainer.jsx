import React from "react";
import { Outlet } from "react-router-dom";
import Topics from "../Topics/Topics";

const QuizCardsContainer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default QuizCardsContainer;
