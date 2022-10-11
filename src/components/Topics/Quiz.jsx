import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionContainer from "./QuestionContainer";

const Quiz = () => {
  const quizInfo = useLoaderData().data;
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold text-slate-700 border-l-primaryColor border-l-8 pl-4">
        Quizzes for {quizInfo.name}
      </h2>

      <div className="grid grid-cols-4 my-10">
        <div className="col-span-3 border w-5/6 mx-auto">
          {/* Iterate Questions Here */}

          {quizInfo.questions.map((question, index) => {
            index++;
            return (
              <QuestionContainer
                key={question.id}
                index={index}
                ques={question}
              />
            );
          })}
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default Quiz;
