import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

// export const QuizContext = useContext();

const Main = () => {
  return (
    <div>
      <Header />
      {/* <QuizContext.Provider value> */}
      <Outlet />
      {/* </QuizContext.Provider> */}
    </div>
  );
};

export default Main;
