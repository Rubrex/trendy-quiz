import React from "react";
import { Link, useRouteError } from "react-router-dom";
import logo from "../../assets/images/logo_tranparent.png";
const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex items-center">
        <img src={logo} width={100} alt="" />
        <h2 className="text-2xl font-bold ml-4">Trendy Quiz</h2>
      </div>
      <br />
      <div>
        <h2 className="text-xl">
          Page not found, Please return to <Link to="/">Home</Link>{" "}
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
