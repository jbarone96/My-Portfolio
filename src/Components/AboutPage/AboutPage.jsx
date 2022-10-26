import React from "react";
import { Card } from "react-bootstrap";
import "../AboutPage/AboutPage.css";

function AboutPage() {
  return (
    <Card className="about-card">
      <Card.Title className="about-title" style={{ fontSize: "28px" }}>
        About The Developer
      </Card.Title>
      <Card.Text className="about-paragraph">
        <p>
          Hello, my name is Jordan Barone and I am an aspiring software
          developer looking for that one life-changing breakthrough to kickstart
          my career in tech and land my first developer job! I EDIT THIS
          PARAGRAPH!
        </p>
        <p>
          I have always been great with computers and technology and all my
          life, I ended up going to flight school right after I graduated
          college but then that pandemic hit and I was unable to find work. I
          thought to myself, "Why not do something involving computers?". I
          didn't want to go back to school so that led me to scour the internet
          in search of a coding bootcamp. I stumbled across Kenzie Academy and
          the rest is history! I have developed a strong understanding of
          JavaScript and the MERN stack and am always looking to add new
          languages to my arsenal.
        </p>
        <p>
          When I'm not behind a computer, I enjoy playing video games, working
          on cars, playing golf and doing astrophotography! I have always been a
          gamer and two notable games that I have the most hours in are Counter
          Strike and ARK. Counter Strike is a competitive FPS game and ARK is an
          amazing survival game where you are dealing with dinosaurs that you
          can eventually tame and ride around the island! I've always been into
          cars ever since I saw the first Fast and Furious movie. I do 98% of
          all maintenance and modifications myself and I enjoy learning how
          things work on cars. I enjoy going out for a round of golf every once
          in a while but I used to be pretty darn good; I was actually the
          captain of my high school golf team for 2 years and I used to shoot in
          the mid 70's! Astrophotography is a new hobby I picked up rather
          recently and it is absolutely amazing! It really humbles you when you
          get that first photo of a galaxy 2.5 MILLION light years away and not
          to mention, an unforgettable experience.
        </p>
      </Card.Text>
    </Card>
  );
}

export default AboutPage;
