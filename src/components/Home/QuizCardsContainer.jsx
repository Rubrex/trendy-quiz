import React from "react";
import Topics from "../Topics/Topics";

const QuizCardsContainer = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-medium border-l-primaryColor border-l-8 pl-4 ">
        Our Topics :
      </h2>
      <div className="mt-10">
        <Topics></Topics>
      </div>
    </div>
  );
};

export default QuizCardsContainer;
