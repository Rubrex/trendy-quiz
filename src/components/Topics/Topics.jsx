import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";

const Topics = () => {
  const totalQuiz = useLoaderData().data;
  console.log(totalQuiz);
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-slate-700 border-l-primaryColor border-l-8 pl-4">
        Select Your topic to get started.
      </h2>
      <div className="mt-20 flex flex-grow flex-wrap justify-center lg:justify-start gap-20">
        {totalQuiz.map((quiz) => {
          console.log(quiz);
          return <QuizCard key={quiz.id} quiz={quiz} />;
        })}
      </div>
    </div>
  );
};

export default Topics;
