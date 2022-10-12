import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="z-20">
      <Hero />
      <div className="container mx-auto">
        <div className="my-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
