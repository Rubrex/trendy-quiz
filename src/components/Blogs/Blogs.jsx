import React from "react";
import EachCard from "./EachCard";

const Blogs = () => {
  const ques_answer = [
    {
      ques: "What's the purpose of React Router?",
      ans: "React Router Helps to make SPA's (Single Page Application) routing without refreshing whole DOM, It also helps to fetch data and send it to it's element",
    },
    {
      ques: "How does Context API works?",
      ans: "The Context API is used to share data across multiple Components without Props Drilling.It set's global data that can be accessed within it's scoped Components",
    },
    {
      ques: "What is useRef?",
      ans: "useRef is a synchronous hook that updates the state immediately and persists its value through the component's lifecycle and prevents re rendering.",
    },
  ];
  return (
    <div className="my-10 container mx-auto">
      <h2 className="text-2xl text-slate-700 font-semibold text-center mb-12 px-4  underline underline-offset-8 ">
        Questions with Answers
      </h2>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {ques_answer.map((q_a, index) => {
          return <EachCard key={index} each={q_a} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
