import { Interweave } from "interweave";
import React, { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/Im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionContainer = ({ ques, index, score, setScore }) => {
  const { question, options, correctAnswer } = ques;
  // States

  // Toast
  const notify = () =>
    toast.info(correctAnswer, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const correctAnsNotify = (ans) =>
    toast.success(`Correct: ${ans}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const wrongAnsNotify = (ans) =>
    toast.error(`Wrong: ${ans}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // Handlers

  // If the question is correct add +1 to score.correct
  // else add +1 to score.incorrect also display toast
  const isCorrect = (option) => {
    if (option === correctAnswer) {
      correctAnsNotify(option);
      setScore((prevState) => ({
        ...prevState,
        correct: +score.correct + 1,
      }));
    } else {
      wrongAnsNotify(option);
      setScore((prevState) => ({
        ...prevState,
        incorrect: +score.incorrect + 1,
      }));
    }
  };
  return (
    <div className="mb-10 neomorph relative">
      <div className="absolute top-6 right-10 cursor-pointer text-2xl">
        <button onClick={notify}>
          <ImEye />
        </button>
      </div>
      <h2 className="py-5 text-2xl font-bold">Quiz: {index}</h2>
      <Interweave className="font-medium py-5" content={question}></Interweave>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 w-5/6 mx-auto py-8">
        {options.map((option) => (
          <div
            key={option}
            className=" p-2 border-slate-500 py-5 rounded-md border-2 hover:border-primaryColor hover:text-primaryColor cursor-pointer"
            onClick={() => isCorrect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
