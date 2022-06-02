import React from "react";

const Hero = ({heroName}) => {
  if (heroName === "Joker") {
    throw new Error('Not a hero!');
  }

  return (
    <div>
      <h2>{heroName}</h2>
    </div>
  );
};

export default Hero;
