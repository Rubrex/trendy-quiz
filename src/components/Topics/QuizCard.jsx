import React from "react";
import { Link } from "react-router-dom";
import "./QuizCard.css";
const QuizCard = ({ quiz }) => {
  const { name, logo, total, id } = quiz;
  return (
    <div className="quiz-card overflow-hidden">
      <div>
        <img src={logo} className="w-60" alt="" />
      </div>
      <div className="px-4 mt-4 ">
        <h3 className="text-xl text-bold">{name}</h3>
        <p>Total Quizzes: {total}</p>
      </div>
      <Link to={`quiz/${id}`}>
        <button className="flex justify-center w-full py-2 mt-3 bg-primaryColor font-medium text-white text-xl">
          Jump In
        </button>
      </Link>
    </div>
  );
};

export default QuizCard;
