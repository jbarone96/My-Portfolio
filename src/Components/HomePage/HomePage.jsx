import React from "react";
import "../HomePage/HomePage.css";
import Particle from "../ReactParticles/Particle";

function HomePage() {
  let date = new Date();
  let time = date.getHours();
  let morning = "Good Morning!";
  let afternoon = "Good Afternoon!";
  let evening = "Good Evening!";

  const displayTimeOfDay = () => {
    if (time < 12) return morning;
    else if (time < 18) return afternoon;
    return evening;
  };

  return (
    <>
      <Particle />
      <div className="page">
        <div className="intro-section">
          <h1 className="intro">{displayTimeOfDay()}</h1>
          <h1 className="intro">
            I'm Jordan
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏽
            </span>
          </h1>
          <h2 className="intro">A Passionate Software Developer|</h2>
        </div>
      </div>
    </>
  );
}

export default HomePage;
