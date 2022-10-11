import { Interweave } from "interweave";
import React from "react";
import { ImEye, ImEyeBlocked } from "react-icons/Im";

const QuestionContainer = ({ ques, index }) => {
  const { question, options } = ques;

  return (
    <div className="mb-10 neomorph relative">
      <div className="absolute top-6 right-10 cursor-pointer text-2xl">
        <ImEye className="" />
      </div>
      <h2 className="py-5 text-2xl font-bold">Quiz: {index}</h2>
      <Interweave className="font-medium py-5" content={question}></Interweave>
      <div className="grid grid-cols-2 gap-4 w-5/6 mx-auto py-8">
        {options.map((option) => (
          <div className="border border-slate-500 py-5 rounded-md border-2 hover:border-primaryColor hover:text-primaryColor cursor-pointer">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
