import React from "react";

const ScoreSidebar = ({ score }) => {
  return (
    <div className=" neomorph m-4  md:mr-10 py-2 md:py-10 flex flex-col items-center">
      <h2 className="text-bold underline underline-offset-4 text-xl pb-4 ">
        ScoreBoard
      </h2>
      <table className="">
        <tbody>
          <tr>
            <td>
              <p className="float-left pr-1 font-medium">Correct Ans:</p>
            </td>
            <td>
              <p className=" font-semibold text-lg text-green-800 hop-in">
                {score.correct}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="float-left pr-1 font-medium">Incorrect Ans:</p>
            </td>
            <td>
              <p className=" font-semibold text-lg text-red-800 hop-in">
                {score.incorrect}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreSidebar;
