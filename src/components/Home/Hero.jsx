import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-section flex justify-center items-center">
      <div className="md:w-full justify-self-start md:container mx-auto px-4">
        <h1 className="font-extrabold text-5xl md:text-7xl lg:text-8xl text-primaryColor">
          Trendy QUIZ
        </h1>
        <p className="mt-4 text-2xl font-bold text-slate-700">
          Sharpen your knowledge by taking quiz !
        </p>
      </div>
    </div>
  );
};

export default Hero;
