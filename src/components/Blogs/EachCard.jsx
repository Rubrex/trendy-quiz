import React, { useEffect, useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/Bi";

const EachCard = ({ each }) => {
  let [votes, setVotes] = useState(0);
  useEffect(() => {
    const randomNumber = parseInt(Math.random() * 1000);
    setVotes(randomNumber);
  }, []);
  return (
    <div
      className="border py-10 px-8 neomorph grid"
      style={{ gridTemplateColumns: "1fr 50px" }}
    >
      <div>
        <h2 className="text-2xl text-slate-800 font-medium border-l-primaryColor border-l-4 pl-2">
          {each.ques}
        </h2>
        <p className="mt-4 font-medium">{each.ans}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <BiUpArrow
          onClick={() => setVotes((votes = votes + 1))}
          className="text-2xl text-green-700 cursor-pointer"
        />
        <span className="font-bold">{votes}</span>
        <BiDownArrow
          onClick={() => setVotes((votes = votes - 1))}
          className="text-2xl text-red-700 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EachCard;
