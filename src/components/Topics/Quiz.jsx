import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuestionContainer from "./QuestionContainer";
import ScoreSidebar from "./ScoreSidebar";

const Quiz = () => {
  const quizInfo = useLoaderData().data;
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold text-slate-700 pl-4">
        Quizzes for {quizInfo.name}
      </h2>

      <div className="grid grid-cols-4 my-10">
        <div className="col-span-3  w-5/6 mx-auto">
          {/* Iterate Questions Here */}

          {quizInfo.questions.map((question, index) => {
            index++;
            return (
              <QuestionContainer
                key={question.id}
                index={index}
                ques={question}
                score={score}
                setScore={setScore}
              />
            );
          })}
        </div>
        {/* Quiz Score  */}
        <div className="">
          <ScoreSidebar score={score}></ScoreSidebar>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
