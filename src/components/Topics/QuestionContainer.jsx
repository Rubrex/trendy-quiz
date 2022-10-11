import { Interweave } from "interweave";
import React, { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/Im";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionContainer = ({ ques, index }) => {
  const { question, options, correctAnswer } = ques;
  // States
  // const [toast, setToast] = useState("");
  // Toast
  const notify = () =>
    toast.info(correctAnswer, {
      toastId: "info1",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div className="mb-10 neomorph relative">
      <div className="absolute top-6 right-10 cursor-pointer text-2xl">
        <button onClick={notify}>
          <ImEye />
        </button>
      </div>
      <h2 className="py-5 text-2xl font-bold">Quiz: {index}</h2>
      <Interweave className="font-medium py-5" content={question}></Interweave>
      <div className="grid grid-cols-2 gap-4 w-5/6 mx-auto py-8">
        {options.map((option) => (
          <div
            key={option}
            className="border border-slate-500 py-5 rounded-md border-2 hover:border-primaryColor hover:text-primaryColor cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
