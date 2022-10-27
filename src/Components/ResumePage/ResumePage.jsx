import React from "react";
import { Button, Card } from "react-bootstrap";
import "../ResumePage/ResumePage.css";
function ResumePage() {
  return (
    <>
      <Card className="resume-card">
        <Card.Title
          className="resume-title"
          style={{ marginTop: "20px", fontSize: "36px" }}
        >
          Jordan Barone
        </Card.Title>
        <Card.Body className="resume-info">
          <div style={{ fontSize: "24px", marginBottom: "10px" }}>
            Full Stack Software Developer
          </div>
          <div>Apex, NC 27502 | j.barone024@gmail.com | (919) 924-6834</div>
          <Card.Link href="https://www.linkedin.com/in/jordan-barone96/">
            LinkedIn
          </Card.Link>
          <Card.Link href="https://github.com/jbarone96">Github</Card.Link>
        </Card.Body>
        <Card.Body className="resume-info">
          Motivated software developer with experience in problem solving and
          computers. Eager to apply my leadership, organization, critical
          thinking, and recent education of full-stack web development, with
          emphasis on front-end development, to develop efficient and organized
          code to improve code base and team thought process within a web
          developer role.
        </Card.Body>
        <Card.Subtitle
          className="resume-info"
          style={{
            fontSize: "22px",
            textAlign: "left",
            marginLeft: "25px",
            borderBottom: "1px solid black",
            fontWeight: "bolder",
          }}
        >
          Education
        </Card.Subtitle>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginLeft: "8px", fontWeight: "bolder" }}
        >
          Kenzie Academy, SNHU | Hands-On, Project-Based Training
          <span className="floater">Indianapolis, IN (remote)</span>
          <br />
          Full Stack Web Development
          <span style={{ float: "right" }}>Graduated: Oct. 2022</span>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginTop: "-30px", marginLeft: "20px" }}
        >
          - JavaScript, HTML/CSS and React <br />
          - Learned valuable skills and proper ways to write clean, readable,
          and organized code
          <br />- GPA: 4.0
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontWeight: "bolder",
            marginTop: "-20px",
          }}
        >
          East Carolina University
          <span style={{ float: "right" }}>Greenville, NC</span>
          <br />
          Bachelor of Science - Criminal Justice
          <span style={{ float: "right" }}>Graduated: May, 2019</span>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginTop: "-30px", marginLeft: "20px" }}
        >
          - Dean’s List for multiple semesters consecutively <br />- GPA: 3.7
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontWeight: "bolder",
            marginTop: "-20px",
          }}
        >
          Blue Line Aviation
          <span style={{ float: "right" }}>Raleigh, NC</span>
          <br />
          Commercial Pilot's License and Certified Flight Instructor
          <span style={{ float: "right" }}>Graduated: Mar., 2020</span>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginTop: "-30px", marginLeft: "20px" }}
        >
          - Strenuous and fast-paced aviation school program <br />- Passed
          oral, written, and practical tests to receive a Commercial Pilot and
          Certified Flight Instructor License
        </Card.Body>
        <Card.Subtitle
          className="resume-info"
          style={{
            fontSize: "22px",
            textAlign: "left",
            marginLeft: "25px",
            borderBottom: "1px solid black",
            fontWeight: "bolder",
          }}
        >
          Skills
        </Card.Subtitle>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginLeft: "8px", fontWeight: "bolder" }}
        >
          Languages and Tools:
          <img className="thumbnail" src="Images/JavaScript-logo.png" alt="" />
          <img className="thumbnail" src="Images/html.png" alt="" />
          <img className="thumbnail" src="Images/css.png" alt="" />
          <img className="thumbnail" src="Images/react.webp" alt="" />
          <img className="thumbnail" src="Images/tailwind.png" alt="" />
          <img className="thumbnail" src="Images/nodejs.png" alt="" />
          <img className="thumbnail" src="Images/mongo.png" alt="" />
          <img className="thumbnail" src="Images/vscode.png" alt="" />
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontWeight: "bolder",
            marginTop: "-20px",
          }}
        >
          Executive Skills:
          <span style={{ fontWeight: "normal", marginLeft: "10px" }}>
            Critical Thinking, Problem-Solving, Leadership, Organization,
            Troubleshooting
          </span>
        </Card.Body>
        <Card.Subtitle
          className="resume-info"
          style={{
            fontSize: "22px",
            textAlign: "left",
            marginLeft: "25px",
            borderBottom: "1px solid black",
            fontWeight: "bolder",
          }}
        >
          Technical Projects
        </Card.Subtitle>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginLeft: "8px", fontWeight: "bolder" }}
        >
          Connect Four Game | Team Leader | <em>JavaScript, HTML/CSS</em>
          <span style={{ float: "right" }}>Mar. 2022</span>
          <br />
          <Card.Link href="https://github.com/KenzieAcademy-Students/teamwork-assessment-connect-four-jbarone96">
            View on Github
          </Card.Link>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginTop: "-20px", marginLeft: "20px" }}
        >
          - Designed how a Connect Four game board displayed on the page with
          the use of CSS properties to allow the board to look just like it
          would in the real game. <br />- Effectively dealt with the possibility
          of edge cases to prevent inaccuracy in the game board when displaying
          the winning combinations and created an ideal way to determine the
          winning combinations for the game using JavaScript functions. <br />-
          Properly debugged and maneuvered around problems in code that would
          cause blocks of code not to run in the correct fashion.
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontWeight: "bolder",
          }}
        >
          Jordan's Online Store | Project |{" "}
          <em>JavaScript, HTML/CSS, React.Js, Express, Node.js, MongoDB</em>
          <span style={{ float: "right" }}>Jul. 2022</span>
          <br />
          <Card.Link href="https://github.com/KenzieAcademy-Students/kenziecart-app-jbarone96">
            View on Github
          </Card.Link>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginTop: "-20px", marginLeft: "20px" }}
        >
          - Developed an online store allowing users to fully interact with the
          webpage and designed methods to allow users to place an order,
          including entering billing and shipping addresses, credit-card
          information and filling out an order form. <br />- Properly coded the
          process of order submission that sends the order data to be stored in
          the database in the proper JSON format for ease of reading through
          order details on the back end. <br />- Enhanced the styling and format
          of the webpage using React-Bootstrap with things such as Toasts,
          Navbars and themes.
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontWeight: "bolder",
          }}
        >
          Top Eats | Capstone Project |{" "}
          <em>React.js, Express, Node.js, MongoDB (Deployed Using AWS)</em>
          <span style={{ float: "right" }}>Oct. 2022</span>
          <br />
          <Card.Link href="http://18.233.97.130/">View on Github</Card.Link>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginTop: "-20px", marginLeft: "20px" }}
        >
          - Developed an entire full-stack application from scratch with a team
          of two other students within an Aglie/Scrum environment. <br />-
          Properly used API calls to fetch data from an external API, process
          that data along with proper state management to use the data
          throughout the application. <br />- Utilization of React-Bootstrap,
          React-Toastify and other frameworks to customize and show
          notifications throughout the application.
        </Card.Body>
        <Card.Subtitle
          className="resume-info"
          style={{
            fontSize: "22px",
            textAlign: "left",
            marginLeft: "25px",
            borderBottom: "1px solid black",
            fontWeight: "bolder",
          }}
        >
          Relevant Work Experience
        </Card.Subtitle>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontWeight: "bolder",
          }}
        >
          Kenzie Academy, SNHU
          <span style={{ float: "right" }}>Indianapolis, IN (Remote)</span>
          <br />
          <em>Software Development Coach</em>
          <span style={{ float: "right" }}>Oct. 2022 - Present</span>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{ textAlign: "left", marginTop: "-30px", marginLeft: "20px" }}
        >
          - Facilitated new and intermediate learners primarily with JavaScript
          and React.js as well as troubleshooting any errors in their code and
          guiding the learner in the correct direction to fix those errors.{" "}
          <br />- Effectively graded any learner assignments and gave
          constructive and elaborate feedback regarding the assignment including
          things that the learner did well with and some things that might need
          a little more attention. <br />- Hosting one on one meetings and
          huddles with students to assist with any problems or issues occurring
          within their code or collaborating and finding ways to improve or
          grasp certain concepts.
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginLeft: "8px",
            fontWeight: "bolder",
          }}
        >
          Amazon, See It Thru Logistics, LLC
          <span style={{ float: "right" }}>Garner, NC</span>
          <br />
          <em>Dispatcher/Leadership</em>
          <span style={{ float: "right" }}>Feb. 2021 - Present</span>
        </Card.Body>
        <Card.Body
          className="resume-info"
          style={{
            textAlign: "left",
            marginTop: "-30px",
            marginLeft: "20px",
            marginBottom: "20px",
          }}
        >
          - Pioneered an organization checklist and flow for Amazon drivers to
          better organize their vans and mentored drivers to allow for more
          efficient delivery of packages. <br />- Assisted in the development of
          dispatcher job responsibilities which included a daily reconciliation
          list for dispatchers to follow. <br />- Facilitated the process for
          drivers to contact dispatchers with any problems out on the road and
          created a new method for the drivers to use on the road.
        </Card.Body>
        <Card.Body className="resume-info">
          <Button
            variant="primary"
            href="https://docs.google.com/document/d/1Fkyp2SI7uupA2BUAR63AOMfiIsXRpFvy/export?format=pdf&ouid=112386261646175866280&rtpof=true&sd=true"
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
