import React from "react";
import { Card } from "react-bootstrap";
import "../ContactPage/ContactPage.css";
import Particle from "../ReactParticles/Particle";

function ContactPage() {
  return (
    <>
      <Particle />
      <Card className="contact-card">
        <Card.Title className="contact-title" style={{ fontSize: "28px" }}>
          Contact Me
        </Card.Title>
        <Card.Text className="contact-info">
          <div className="contact-subtitle">
            <strong>Email Address</strong>
            <br />
            j.barone024@gmail.com
          </div>
          <div className="contact-subtitle">
            <strong>Mobile Number</strong>
            <br />
            (919) 924-6834
          </div>
          <div className="contact-subtitle">
            <strong>LinkedIn</strong>
            <br />
            <a href="https://www.linkedin.com/in/jordan-barone96/">
              Jordan Barone
            </a>
          </div>
        </Card.Text>
      </Card>
    </>
  );
}

export default ContactPage;
