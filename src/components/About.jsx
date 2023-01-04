import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Container } from "reactstrap";
import "../Styles/About.css";

const About = () => {
  return (
    <section className="info" id="about">
      <Container>
        <div className="text-center">
          <h3 className="fw-bold">Who am I ?</h3>
          <div className="underline" />
          <p className="fs-4">
            I'm a Front End Engineer based in Egypt. I describe myself as a <br className="next"/>
            passionate developer who loves coding, open source, and the web
            platform. <br className="next"/> Aside from my job, I like to create and contribute to open
            source projects. <br className="next"/> That helps me to learn a ton of new stuff, grow as
            a developer <br className="next"/> and support other open source projects.
          </p>
        </div>

        <ul className="social d-flex align-items-center gap-2 list-unstyled mt-4 justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/melmesery"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/melmesery/"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default About;
