import React from "react";
import { Button, Card } from "react-bootstrap";
import Particle from "../ReactParticles/Particle";
import "../ResumePage/ResumePage.css";

function ResumePage() {
  return (
    <>
      <Particle />
      <Card className="resume-card">
        <Card.Title
          className="resume-title"
          style={{ marginTop: "20px", fontSize: "36px" }}
        >
          Jordan Barone
        </Card.Title>
        <Card.Body className="resume-header">
          <div>
            <Card.Link href="https://www.linkedin.com/in/jordan-barone96/">
              <img className="header-thumbnail" src="Images/linkedin.png" />
              LinkedIn
            </Card.Link>
            &nbsp; | <img className="header-thumbnail" src="Images/phone.png" />
            (919) 924-6834 |
            <img className="header-thumbnail" src="Images/gmail.png" />
            j.barone024@gmail.com |
            <Card.Link href="https://github.com/jbarone96">
              <img className="header-thumbnail" src="Images/github.png" />
              Github
            </Card.Link>
          </div>
        </Card.Body>
        <Card.Subtitle className="resume-subtitle">Skills</Card.Subtitle>
        <Card.Body>
          <ul className="list-items">
            <li>
              React | JavaScript | HTML/CSS | Node | Express | Bootstrap | Git |
              Swift | Python | MongoDB | API Development
            </li>
            <li>
              Interactive Design | Content Management | Website Analytics |
              Mobile App Development | E-Commerce Management
            </li>
          </ul>
        </Card.Body>
        <Card.Subtitle className="resume-subtitle">Experience</Card.Subtitle>
        <Card.Body className="experience-title">
          <strong>Digital Producer</strong>
          <img
            className="company_1"
            src="Images/Belk_logo_2010.svg.png"
            alt="Belk Logo"
          />
          <span style={{ float: "right" }}>
            <em>Remote</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <strong>11/2022 - Current</strong>
          </span>
        </Card.Body>
        <Card.Body className="experience-list-items">
          <ul>
            <li>
              Utilized <strong>React</strong> to create a "stories" feature
              similar to Instagram and successfully implemented on the Belk
              mobile application leading to a 29% increase in sales since
              launch.
            </li>
            <li>
              Utilized <strong>HTML</strong> and <strong>CSS</strong> to
              construct SEO web pages using various CSS styles that generated a
              34% increase in website traffic growth by utilizing SEO best
              practices in content creation.
            </li>
            <li>
              Collaborated with creative teams for the development of visually
              appealing and engaging digital assets while streamlining
              production processes for increased efficiency and optimized
              workflows.
            </li>
            <li>
              Enhanced user experience by developing and implementing innovative
              digital content strategies.
            </li>
            <li>
              Made use of project management software to maintain clear
              communication among team members.
            </li>
            <li>
              Managed the development of the Belk homepage, shop category pages,
              Belk mobile application and coupon pages through the use of{" "}
              <strong>HTML/CSS</strong>, <strong>JavaScript</strong> and{" "}
              <strong>React</strong>.
            </li>
          </ul>
        </Card.Body>
        <Card.Body className="experience-title">
          <strong>Software Engineering Teaching Assistant</strong>
          <img
            className="company_2"
            src="Images/Kenzie.png"
            alt="Kenzie Academy Logo"
          />
          <span style={{ float: "right" }}>
            <em>Remote</em>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>10/2022 - 09/2023</strong>
          </span>
        </Card.Body>
        <Card.Body className="experience-list-items">
          <ul>
            <li>
              Guided and mentored new and aspiring software developers,
              fostering their coding skills and providing valuable insights and
              support throughout their educational journey, ensuring they are
              well-prepared for careers in the tech industry.
            </li>
            <li>
              Assisted teachers with classroom management and classroom
              behavior, creating a positive learning atmosphere conducive to
              academic success.
            </li>
            <li>
              Helped with grading assignments and tests, providing constructive
              feedback to students based on results.
            </li>
            <li>
              Facilitated new and intermediate students, primarily with{" "}
              <strong>JavaScript</strong>, <strong>React</strong>,{" "}
              <strong>Node</strong> and <strong>Express</strong>.
            </li>
          </ul>
        </Card.Body>
        <Card.Subtitle className="resume-subtitle">Projects</Card.Subtitle>
        <Card.Body className="project-list-items">
          <Card.Link href="https://my-portfolio-beta-pink.vercel.app/">
            <strong style={{ marginLeft: "14px" }}>My Portfolio</strong>
          </Card.Link>
          <ul>
            <li>
              Created a professional portfolio to highlight some of my front-end
              development skills and to showcase my skills using{" "}
              <strong>React</strong> with different frameworks.
            </li>
          </ul>
          <Card.Link href="https://react-weather-app-eta-nine.vercel.app/">
            <strong style={{ marginLeft: "14px" }}>React Weather</strong>
          </Card.Link>
          <ul>
            <li>
              Created a weather application that utilizes an API call to get
              various weather conditions and details for a city selected by the
              user.
            </li>
            <li>
              The user can choose from the predetermined list of popular cities,
              search for a city anywhere in the world or allow the application
              to use the user's current location to display weather data.
            </li>
            <li>
              Utilized toast notifications using React Toastify to inform the
              user when the application is awaiting the return data from the API
              call and shows a success notification when the weather data has
              been successfully loaded.
            </li>
          </ul>
        </Card.Body>
        <Card.Subtitle className="resume-subtitle">Education</Card.Subtitle>
        <Card.Body className="experience-title">
          <strong>Certificate of Completion</strong>
          <span style={{ float: "right" }}>
            <em>Remote</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>01/2022 - 10/2022</strong>
          </span>
          <ul className="education-list-items">
            <li>Full Stack Web Development Program</li>
          </ul>
        </Card.Body>
        <Card.Body className="experience-title" style={{ marginTop: "-20px" }}>
          <strong>Bachlelor of Science</strong>
          <span style={{ float: "right" }}>
            <em>Greenville, NC</em>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>08/2017 - 05/2019</strong>
          </span>
          <ul className="education-list-items">
            <li>Major in Criminal Justice</li>
          </ul>
        </Card.Body>
        <Card.Body className="download">
          <Button
            variant="primary"
            href="https://drive.google.com/uc?export=download&id=1052RO1JvMNezDqPVgsSO857lKzNnqbQG"
          >
            {" "}
            Download
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default ResumePage;
