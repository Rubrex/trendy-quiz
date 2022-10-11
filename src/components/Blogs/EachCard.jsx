import React from "react";

const EachCard = ({ each }) => {
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
      <div>Votes</div>
    </div>
  );
};

export default EachCard;
