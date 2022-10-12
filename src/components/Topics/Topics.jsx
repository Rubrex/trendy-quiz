import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";

const Topics = () => {
  const totalQuiz = useLoaderData().data;
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-slate-700 text-center mb-12 underline underline-offset-8 ">
        Select Your topic to get started.
      </h2>
      <div className="my-20 flex flex-grow flex-wrap justify-center  gap-20">
        {totalQuiz.map((quiz) => {
          return <QuizCard key={quiz.id} quiz={quiz} />;
        })}
      </div>
    </div>
  );
};

export default Topics;
