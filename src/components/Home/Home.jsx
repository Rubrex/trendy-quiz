import React from "react";
import Hero from "./Hero";
import QuizCardsContainer from "./QuizCardsContainer";

const Home = () => {
  return (
    <div className="z-20">
      <Hero />
      <QuizCardsContainer />
    </div>
  );
};

export default Home;
